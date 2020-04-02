import { navigate } from '@reach/router';

const select = `all(
     all(group(source) order(-count()) each(output(count())))
     all(group(journal) max(10) order(-count()) each(output(count())))
     all(group(authors.name) max(10) order(-count()) each(output(count())) as(author))
     all(group(time.year(timestamp)) max(10) order(-count()) each(output(count())) as(year))
     all(group(has_full_text) each(output(count())))
   )`
  .split('\n')
  .map(s => s.trim())
  .join('');

const orCombiner = (field, array, range = false) =>
  array.length
    ? '+(' +
      array
        .map(s => (range ? `${field}:[${s}]` : `${field}:"${s}"`))
        .join(' ') +
      ')'
    : null;

const timestampStartOfYearUtc = year => Date.UTC(year, 0, 1) / 1000;

const generateApiQueryParams = () => {
  const { journal, source, year, author, has_full_text } = getSearchState();
  const timestampRanges = year
    .map(y => parseInt(y))
    .map(
      y =>
        timestampStartOfYearUtc(y) + ';' + (timestampStartOfYearUtc(y + 1) - 1)
    );
  const filter = [
    orCombiner('journal', journal),
    orCombiner('source', source),
    orCombiner('timestamp', timestampRanges, true),
    orCombiner('authors.name', author),
    orCombiner('has_full_text', has_full_text),
  ]
    .filter(s => s)
    .join(' ');

  const query = new URLSearchParams(window.location.search);
  const ranking = query.get('ranking');
  const fieldset = query.get('fieldset');
  [
    'journal',
    'source',
    'year',
    'author',
    'has_full_text',
    'ranking',
    'fieldset',
  ].forEach(q => query.delete(q));
  if (filter) query.set('filter', filter);
  if (ranking) query.set('ranking.profile', ranking);
  if (fieldset) query.set('model.defaultIndex', fieldset);
  query.set('select', select);

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
    journal: urlParams.getAll('journal'),
    source: urlParams.getAll('source'),
    year: urlParams.getAll('year'),
    author: urlParams.getAll('author'),
    has_full_text: urlParams.getAll('has_full_text'),
    ranking: urlParams.get('ranking'),
  };
};

export { generateApiQueryParams, getSearchState, onSearch };
