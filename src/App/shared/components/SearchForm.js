import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Icon } from 'semantic-ui-react';

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
  const handleSearch = () => onSearch({ query: currentQuery });

  return (
    <StyledSearchForm onSubmit={handleSearch}>
      <Form.Input
        fluid
        icon={<Icon name="search" link onClick={handleSearch} />}
        placeholder="Search..."
        className="input"
        onChange={(e, { value }) => setCurrentQuery(value)}
        value={currentQuery}
      />
    </StyledSearchForm>
  );
}

export default SearchForm;
