import DOMPurify from "isomorphic-dompurify";

// SECURITY ENHANCEMENT: Reverse Tabnabbing Prevention
// We add a global hook to isomorphic-dompurify to ensure any links that open
// in a new tab (target="_blank") also include rel="noopener noreferrer".
// This prevents the newly opened tab from maliciously hijacking the parent window
// via the window.opener API.
DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if ("target" in node && node.getAttribute("target")?.toLowerCase() === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    // Use a Set to prevent adding duplicates if they already exist
    const relSet = new Set(existingRel.split(/\s+/).filter(Boolean));
    relSet.add("noopener");
    relSet.add("noreferrer");
    node.setAttribute("rel", Array.from(relSet).join(" "));
  }
});

export default DOMPurify;
