import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Menu } from 'semantic-ui-react';
import Link from 'App/shared/components/Link';

const NavBar = styled(Menu)`
  &&& {
    height: 64px;
    margin: 0;

    border-bottom: 1px solid rgba(63, 157, 216, 0.25);

    .item.header {
      font-weight: bold;
      font-size: 1.4em;
    }

    .item,
    .item > a,
    .item > a:not(.ui) {
      color: white;
      font-weight: bold;
    }

    .item > a:hover {
      color: #ffc43c;
    }

    .ui.image {
      width: 100px;
    }
  }
`;

function NavMenu() {
  return (
    <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }} width={1}>
      <NavBar secondary inverted fluid>
        <Menu.Item header>
          <Link to="/">CORD-19 Search and Navigate</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="https://github.com/vespa-engine/cord-19/blob/master/cord-19-queries.md">API</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md">
              Open source
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </NavBar>
    </Box>
  );
}

export default NavMenu;
