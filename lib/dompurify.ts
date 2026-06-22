import DOMPurify from "isomorphic-dompurify";

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if ("target" in node && node.getAttribute("target") === "_blank") {
    const currentRel = node.getAttribute("rel") || "";
    const rels = new Set(currentRel.split(/\s+/).filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    node.setAttribute("rel", Array.from(rels).join(" "));
  }
});

export default DOMPurify;
