import React from 'react';
import { Router } from '@reach/router';
import { Flex, Box } from 'rebass';
import NavMenu from 'App/shared/components/NavMenu';
import Main from './Main';
import Search from './Search';
import Article from './Article';
import Error from 'App/shared/components/Error';

function App() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box width={1}>
        <NavMenu />
      </Box>
      <Router primary={false} component={React.Fragment}>
        <Main path="/" />
        <Search path="/search" />
        <Article path="/article/:id" />
        <Error default />
      </Router>
    </Flex>
  );
}

export default App;
