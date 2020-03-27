import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const Title = styled.h2`
  font-weight: 400;
  color: #3f9dd8;
`;

const ErrorGrid = styled(Grid)`
  height: 80vh;
`;

const getMessage = code => {
  switch (code) {
    case 403:
      return 'Sorry, you are not authorized to view this page.';
    case 404:
      return 'Sorry, the page you were looking for does not exist.';
    case 500:
      return 'Oops... something went wrong.';
    default:
      return 'Unknown error - really, I have no idea what is going on here.';
  }
};

function Error({ code = 404 }) {
  const message = getMessage(code);

  return (
    <ErrorGrid textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Title>{message}</Title>
        </Grid.Column>
      </Grid.Row>
    </ErrorGrid>
  );
}

export default Error;
