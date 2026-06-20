import DOMPurify from 'isomorphic-dompurify';

DOMPurify.addHook('afterSanitizeAttributes', function(node) {
  if ('target' in node && node.getAttribute('target') === '_blank') {
    const rel = node.getAttribute('rel');
    if (!rel) {
      node.setAttribute('rel', 'noopener noreferrer');
    } else {
      const rels = new Set(rel.split(' '));
      rels.add('noopener');
      rels.add('noreferrer');
      node.setAttribute('rel', Array.from(rels).join(' '));
    }
  }
});

export default DOMPurify;
