import { navigate } from '@reach/router';

const orCombiner = (field, array) =>
  array.length
    ? '+(' + array.map(s => `${field}:"${s}"`).join(' ') + ')'
    : null;

const generateApiQueryParams = () => {
  const { timestamp, journals, sources } = getSearchState();
  const filter = [
    timestamp ? `+timestamp:[${timestamp}]` : null,
    orCombiner('journal', journals),
    orCombiner('source', sources),
  ]
    .filter(s => s)
    .join(' ');

  const query = new URLSearchParams(window.location.search);
  ['journal', 'source', 'timestamp'].forEach(q => query.delete(q));
  if (filter) query.set('filter', filter);

  return query;
};

const onSearch = params => {
  const urlParams = new URLSearchParams(window.location.search);
  for (let [key, value] of Object.entries(params)) {
    urlParams.delete(key);
    if (Array.isArray(value)) value.forEach(v => urlParams.append(key, v));
    else if (value) urlParams.set(key, value);
  }

  // No query or filters specified
  if (urlParams.entries().next().done) return;
  navigate('/search?' + urlParams);
};

const getSearchState = () => {
  const urlParams = new URLSearchParams(window.location.search);

  return {
    query: urlParams.get('query') || '',
    journals: urlParams.getAll('journal'),
    sources: urlParams.getAll('source'),
    timestamp: urlParams.get('timestamp') || '',
  };
};

export { generateApiQueryParams, getSearchState, onSearch };
