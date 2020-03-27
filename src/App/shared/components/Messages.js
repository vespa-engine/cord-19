/**
 * Component to encapsulate messages that should be displayed on page (typically in place of something
 * else if it failed to load)
 */
import React from 'react';
import { Message, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled(Segment)`
  &&& {
    width: 100%;
    margin: 0;
    .ui.message {
      background: transparent;
      box-shadow: none;
    }
    .ui.warning.message {
      background: #fffaf3;
    }
    .ui.error.message {
      background: #fff6f6;
    }
  }
`;

const Loading = ({ header, message }) => (
  <Container basic textAlign={'center'}>
    <Message>
      {header && <Message.Header>{header}</Message.Header>}
      <Message.Content>{message}</Message.Content>
    </Message>
  </Container>
);

const Warning = ({ header, message }) => (
  <Container basic textAlign={'center'}>
    <Message warning>
      {header && <Message.Header>{header}</Message.Header>}
      <Message.Content>{message}</Message.Content>
    </Message>
  </Container>
);

const Error = ({ header, message }) => (
  <Container basic textAlign={'center'}>
    <Message error>
      {header && <Message.Header>{header}</Message.Header>}
      <Message.Content>{message}</Message.Content>
    </Message>
  </Container>
);

export { Loading, Warning, Error };
