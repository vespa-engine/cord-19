import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const StyledSearchForm = styled(Form)`
  &&& {
    font-size: 1.1rem;
    display: flex;
    width: 100%;
    margin: 0 auto;

    .input {
      margin: 0;
      flex: 1;
    }

    & .dropdown {
      margin-left: 1em;
      width: fit-content;
      border: 1px solid rgba(34, 36, 38, 0.15);
      border-radius: 0.28571429rem
      box-shadow: none;
      background: white;
      padding: 0.78125rem 0.4rem;
    }
  }
`;

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
    text: 'By Date',
    value: 'freshness',
  },
];

function SearchForm({ onSearch, ranking, showRanking, query = '' }) {
  const [currentQuery, setCurrentQuery] = useState(query);
  useEffect(() => {
    if (query !== currentQuery) setCurrentQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <StyledSearchForm onSubmit={() => onSearch({ query: currentQuery })}>
      <Form.Input
        icon="search"
        placeholder="Search..."
        className="input"
        onChange={(e, { value }) => setCurrentQuery(value)}
        value={currentQuery}
      />
      {showRanking && (
        <Form.Dropdown
          icon="sort amount down"
          defaultValue={
            rankings.find(
              ({ value }, i) => ranking === value || (!ranking && i === 0)
            ).value
          }
          options={rankings.map((rnk, id) => ({ id, ...rnk }))}
          onChange={(event, { value }) =>
            onSearch({ query: currentQuery, ranking: value })
          }
        />
      )}
    </StyledSearchForm>
  );
}

export default SearchForm;
