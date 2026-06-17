import DOMPurify from 'isomorphic-dompurify';

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
    const rel = node.getAttribute('rel') || '';
    const relSet = new Set(rel.split(/\s+/).filter(Boolean));
    relSet.add('noopener');
    relSet.add('noreferrer');
    node.setAttribute('rel', Array.from(relSet).join(' '));
  }
});

export default DOMPurify;
