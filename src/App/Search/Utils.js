import { navigate } from '@reach/router';

const onSearch = params => {
  const urlParams = new URLSearchParams(
    'query' in params ? '' : window.location.search // Reset all filters if searching new query
  );
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
    journal: urlParams.getAll('journal'),
    source: urlParams.getAll('source'),
    year: urlParams.getAll('year'),
    author: urlParams.getAll('author'),
    has_full_text: urlParams.getAll('has_full_text'),
  };
};

export { getSearchState, onSearch };
