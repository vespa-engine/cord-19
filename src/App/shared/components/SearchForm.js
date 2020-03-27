import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
import { navigate } from '@reach/router';

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

function SearchForm() {
  const [query, setQuery] = useState(window.location.search);
  const params = new URLSearchParams(query);
  const set = () => setQuery(params.toString());

  return (
    <StyledSearchForm onSubmit={() => navigate('/search?' + params)}>
      <Form.Input
        icon="search"
        placeholder="Search..."
        className="input"
        onChange={(e, { value }) => set(params.set('query', value))}
        value={params.get('query') || ''}
      />
    </StyledSearchForm>
  );
}

export default SearchForm;
