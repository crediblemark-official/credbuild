import DOMPurify from "isomorphic-dompurify";

// Add a hook to enforce `rel="noopener noreferrer"` on `target="_blank"` links
// to prevent reverse tabnabbing vulnerabilities.
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const rels = new Set(existingRel.split(/\s+/).filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    node.setAttribute("rel", Array.from(rels).join(" "));
  }
});

export default DOMPurify;
