import DOMPurify from "isomorphic-dompurify";

// Add global hooks to enforce security policies

// Enforce rel="noopener noreferrer" for target="_blank" links
// to prevent reverse tabnabbing vulnerabilities
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (
    node.tagName === "A" &&
    node.getAttribute("target") === "_blank"
  ) {
    node.setAttribute("rel", "noopener noreferrer");
  }
});

export default DOMPurify;
