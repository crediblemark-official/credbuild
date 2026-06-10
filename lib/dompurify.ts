import DOMPurify from "isomorphic-dompurify";

// Enforce rel="noopener noreferrer" on all links with target="_blank"
DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    node.setAttribute("rel", "noopener noreferrer");
  }
});

export default DOMPurify;
