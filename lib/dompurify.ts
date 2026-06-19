import DOMPurify from "isomorphic-dompurify";

// Add a hook to ensure target="_blank" links have rel="noopener noreferrer"
// to prevent reverse tabnabbing
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (
    node.tagName === "A" &&
    node.getAttribute("target") === "_blank"
  ) {
    const rel = node.getAttribute("rel") || "";
    const relSet = new Set(rel.split(/\s+/).filter(Boolean));
    relSet.add("noopener");
    relSet.add("noreferrer");
    node.setAttribute("rel", Array.from(relSet).join(" "));
  }
});

export default DOMPurify;
