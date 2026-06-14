import DOMPurify from "isomorphic-dompurify";

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if ("target" in node && node.getAttribute("target") === "_blank") {
    node.setAttribute("rel", "noopener noreferrer");
  }
});

export default DOMPurify;
