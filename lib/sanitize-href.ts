export function sanitizeHref(href?: string): string | undefined {
  if (!href) return href;
  const strippedHref = href.replace(/[\u0000-\u001F\u007F-\u009F\s]/g, "").toLowerCase();
  if (
    strippedHref.startsWith("javascript:") ||
    strippedHref.startsWith("data:") ||
    strippedHref.startsWith("vbscript:")
  ) {
    return "#";
  }
  return href;
}
