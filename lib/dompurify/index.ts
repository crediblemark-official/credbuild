import DOMPurify from 'isomorphic-dompurify';

DOMPurify.addHook('afterSanitizeAttributes', function (node) {
  if ('target' in node && node.getAttribute('target') === '_blank') {
    const rel = node.getAttribute('rel');
    if (rel) {
      const parts = new Set(rel.split(/\s+/));
      parts.add('noopener');
      parts.add('noreferrer');
      node.setAttribute('rel', Array.from(parts).join(' '));
    } else {
      node.setAttribute('rel', 'noopener noreferrer');
    }
  }
});

export default DOMPurify;
