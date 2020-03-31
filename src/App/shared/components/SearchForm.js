import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const StyledSearchForm = styled(Form)`
  &&& {
    font-size: 1.1rem;
    display: flex;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    .input {
      width: 100%;
    }
  }
`;

function SearchForm({ onSearch, query = '' }) {
  const [currentQuery, setCurrentQuery] = useState(query);

  return (
    <StyledSearchForm onSubmit={() => onSearch({ query: currentQuery })}>
      <Form.Input
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
