import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import SearchForm from 'App/shared/components/SearchForm';

const ContentGrid = styled(Grid)`
  &&& {
    font-size: 1.1rem;

    .column {
      margin-top: 200px;
      padding: 0;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 300;
    }
  }
`;

function Main() {
  return (
    <ContentGrid verticalAlign="middle" textAlign="center">
      <Grid.Column>
        <h1 size="huge">CORD-19 Search</h1>
        <SearchForm />
      </Grid.Column>
    </ContentGrid>
  );
}

export default Main;
