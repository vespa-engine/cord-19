export function nameFormatter({ first, middle, last }) {
  if (!last) return first || middle;
  const matches = [first, middle]
    .filter(s => s)
    .join(' ')
    .match(/(?:(?=^|\s)(\w)|([A-Z]))/g);
  return (matches ? matches.join('') + ' ' : '') + last;
}
