import React from 'react';
import { Router } from '@reach/router';
import { Flex, Box } from 'rebass';
import NavMenu from 'App/shared/components/NavMenu';
import Main from './Main';
import Search from './Search';
import Error from 'App/shared/components/Error';

function App() {
  return (
    <Flex flexDirection="column">
      <Box width={1} bg="#3F9CD8">
        <NavMenu />
      </Box>
      <Box width={1}>
        <Router primary={false} component={React.Fragment}>
          <Main path="/" />
          <Search path="/search" />
          <Error default />
        </Router>
      </Box>
    </Flex>
  );
}

export default App;
