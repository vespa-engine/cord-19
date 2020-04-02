import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { Grid, List, Image } from 'semantic-ui-react';
import SearchForm from 'App/shared/components/SearchForm';
import Link from 'App/shared/components/Link';
import { onSearch } from './Search/Utils';
import VespaIcon from 'App/shared/img/VespaIcon.png';
import Footer from 'App/shared/components/Footer';

const Content = styled(Box)`
  background-image: linear-gradient(0deg, #98c1db 7%, #005a8e 100%);
  min-height: calc(100vh - 66px);
`;

const ContentGrid = styled(Grid)`
  &&& {
    min-height: calc(100vh - 130px);
    color: white;
    font-size: 1.1rem;
    margin-top: 0;

    .column {
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

    .ui.form {
      max-width: 800px;
    }

    a {
      color: #b3e5fc !important;
      font-weight: 600;
      font-weight: normal;
    }

    a:hover {
      color: #ffc43c !important;
    }
  }
`;

function SearchSuggestions() {
  return (
    <>
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
    </>
  );
}

function VespaDescription() {
  return (
    <Box my={4}>
      <Image src={VespaIcon} size="tiny" centered />
      <Text mt={3}>
        This is an{' '}
        <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md">
          open source application{' '}
        </Link>
        on <Link to="https://vespa.ai">Vespa.ai</Link>
      </Text>
      <Text mt={1}>The big data serving engine.</Text>
    </Box>
  );
}

function Main() {
  return (
    <Content width={1}>
      <ContentGrid verticalAlign="middle" textAlign="center">
        <Grid.Column>
          <h1 size="huge">CORD-19 Search</h1>
          <SearchForm onSearch={onSearch} />
          <SearchSuggestions />
          <VespaDescription />
        </Grid.Column>
      </ContentGrid>
      <Footer page="main" />
    </Content>
  );
}

export default Main;
