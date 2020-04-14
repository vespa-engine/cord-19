import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import Link from 'App/shared/components/Link';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';

const Container = styled.div`
  &&& {
    margin: 0.32em;
    > span {
      float: right;
    }
  }
`;

const fieldsets = [
  {
    text: 'title and abstract',
    value: 'default',
  },
  {
    text: 'title, abstract and full text',
    value: 'all',
  },
];

const rankings = [
  {
    text: 'Vespa BM25',
    value: 'bm25',
  },
  {
    text: 'Vespa nativeRank',
    value: 'default',
  },
  {
    text: 'date',
    value: 'freshness',
  },
];

function RelatedArticle({ id }) {
  const params = new URLSearchParams(window.location.search);
  const use_specter = params.get('use-specter') === 'true';
  const similarMethod = use_specter
    ? 'SPECTER similarity'
    : 'Sent-SciBERT similarity';

  const query = new URLSearchParams();
  query.set('yql', `select title from sources * where id = ${id};`);
  const { loading, response, error } = Get(
    '/search/?' + query.toString()
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  const hits = response?.root?.children;
  if (!hits) return null;

  return (
    <Container>
      Showing articles similar to{' '}
      <Link to={`/article/${id}`}>{hits[0].fields.title}</Link> by{' '}
      {similarMethod}.
    </Container>
  );
}

function SearchOptions({ totalCount, fieldset, ranking, onSearch, relatedId }) {
  return (
    <>
      <Container>
        {totalCount > 0 && (
          <>
            <b>{totalCount}</b> matches
          </>
        )}
        <span>
          Searching in{' '}
          <Dropdown
            inline
            defaultValue={
              fieldsets.find(
                ({ value }, i) => fieldset === value || (!fieldset && i === 0)
              ).value
            }
            options={fieldsets.map((flds, id) => ({ id, ...flds }))}
            onChange={(event, { value }) => onSearch({ fieldset: value })}
          />
          {' and sorting by '}
          <Dropdown
            inline
            defaultValue={
              rankings.find(
                ({ value }, i) => ranking === value || (!ranking && i === 0)
              ).value
            }
            options={rankings.map((rnk, id) => ({ id, ...rnk }))}
            onChange={(event, { value }) => onSearch({ ranking: value })}
          />
        </span>
      </Container>
      {relatedId && <RelatedArticle id={relatedId} />}
    </>
  );
}

export default SearchOptions;
