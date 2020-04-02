import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const StyledSearchForm = styled(Form)`
  &&& {
    font-size: 1.1rem;
    margin: 0 auto;

    input[type='text'] {
      border-radius: 1.3rem;
    }
  }
`;

function SearchForm({ onSearch, query = '' }) {
  const [currentQuery, setCurrentQuery] = useState(query);
  useEffect(() => {
    if (query !== currentQuery) setCurrentQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <StyledSearchForm onSubmit={() => onSearch({ query: currentQuery })}>
      <Form.Input
        fluid
        icon="search"
        placeholder="Search..."
        className="input"
        onChange={(e, { value }) => setCurrentQuery(value)}
        value={currentQuery}
      />
    </StyledSearchForm>
  );
}

export default SearchForm;
