import DOMPurifyOriginal from "isomorphic-dompurify";

DOMPurifyOriginal.addHook("afterSanitizeAttributes", function (node) {
  if ("target" in node && node.getAttribute("target") === "_blank") {
    const rel = node.getAttribute("rel");
    if (rel) {
      const rels = new Set(rel.split(/\s+/).filter(Boolean));
      rels.add("noopener");
      rels.add("noreferrer");
      node.setAttribute("rel", Array.from(rels).join(" "));
    } else {
      node.setAttribute("rel", "noopener noreferrer");
    }
  }
});

const sanitize = (source: string | Node, config?: any) => {
  return DOMPurifyOriginal.sanitize(source, {
    ...config,
    ADD_ATTR: [...(config?.ADD_ATTR || []), "target"],
  });
};

const DOMPurify = {
  ...DOMPurifyOriginal,
  sanitize,
};

export default DOMPurify;
