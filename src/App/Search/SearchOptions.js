import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

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

function SearchOptions({ totalCount, fieldset, ranking, onSearch }) {
  return (
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
  );
}

export default SearchOptions;
