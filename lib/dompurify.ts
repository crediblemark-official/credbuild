import DOMPurify from "isomorphic-dompurify";

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if ("getAttribute" in node && typeof node.getAttribute === "function" && node.getAttribute("target") === "_blank") {
    const existingRel = node.getAttribute("rel") || "";
    const rels = new Set(existingRel.split(/\s+/).filter(Boolean));
    rels.add("noopener");
    rels.add("noreferrer");
    if ("setAttribute" in node && typeof node.setAttribute === "function") {
      node.setAttribute("rel", Array.from(rels).join(" "));
    }
  }
});

export default DOMPurify;
