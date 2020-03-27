import React from 'react';
import styled from 'styled-components';
import { Grid, List } from 'semantic-ui-react';
import SearchForm from 'App/shared/components/SearchForm';
import Link from 'App/shared/components/Link';

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

    h4 {
      font-size: 1.1rem;
      margin: 3rem 0 0;
    }

    & .ui.list {
      margin: 0.5rem 0;
    }
  }
`;

function Main() {
  return (
    <ContentGrid verticalAlign="middle" textAlign="center">
      <Grid.Column>
        <h1 size="huge">CORD-19 Search</h1>
        <SearchForm />
        <h4>Try searching for...</h4>
        <List>
          <List.Item>
            <Link to="/search?query=%2Bcovid-19+%2Btemperature+impact+on+viral+transmission">
              +covid-19 +temperature impact on viral transmission
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/search?query=basic+reproduction+numbers+for+covid-19+in+%2B%22south+korea%22">
              basic reproduction numbers for covid-19 in +"south korea"
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/search?query=Impact+of+school+closure+to+handle+COVID-19+pandemic">
              Impact of school closure to handle COVID-19 pandemic
            </Link>
          </List.Item>
        </List>
      </Grid.Column>
    </ContentGrid>
  );
}

export default Main;
