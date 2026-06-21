import DOMPurify from "isomorphic-dompurify";

// Add a hook to force target="_blank" links to have rel="noopener noreferrer"
// to prevent reverse tabnabbing attacks.
DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const rels = new Set(existingRel.split(/\s+/).filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    node.setAttribute("rel", Array.from(rels).join(" "));
  }
});

export default DOMPurify;
