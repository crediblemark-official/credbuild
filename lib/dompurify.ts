import DOMPurify from "isomorphic-dompurify";

DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if ("target" in node && node.getAttribute("target")?.toLowerCase() === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const rels = new Set(existingRel.split(/\s+/).filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    node.setAttribute("rel", Array.from(rels).join(" "));
  }
});

export default DOMPurify;
