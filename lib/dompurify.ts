import DOMPurify from "isomorphic-dompurify";

// Security Hook: Enforce rel="noopener noreferrer" for any target="_blank" links
// to prevent reverse tabnabbing vulnerabilities.
DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if ("target" in node && node.getAttribute("target")?.toLowerCase() === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const rels = new Set(existingRel.split(" ").filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    node.setAttribute("rel", Array.from(rels).join(" "));
  }
});

export default DOMPurify;
