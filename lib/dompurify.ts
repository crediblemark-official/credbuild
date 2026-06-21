import DOMPurify from "isomorphic-dompurify";

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const relSet = new Set(existingRel.split(/\s+/).filter(Boolean));
    relSet.add("noopener");
    relSet.add("noreferrer");
    node.setAttribute("rel", Array.from(relSet).join(" "));
  }
});

export default DOMPurify;
