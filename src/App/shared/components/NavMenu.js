import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Menu, Container } from 'semantic-ui-react';
import Link from 'App/shared/components/Link';

const Header = styled(Box)`
  background-color: #005a8e;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  a {
    cursor: pointer;
    font-weight: 600;
  }
`;

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

    span {
      color: #ffc43c;
    }
  }
`;

function NavMenu() {
  return (
    <Header sx={{ paddingLeft: '0px', paddingRight: '0px' }} width={1}>
      <Container>
        <NavBar secondary inverted fluid>
          <Menu.Item header fitted>
            <Link to="/">
              <span>CORD-19</span> Search and Navigate
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="https://github.com/vespa-engine/cord-19/blob/master/cord-19-queries.md">
                API
              </Link>
            </Menu.Item>
            <Menu.Item fitted>
              <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md">
                Open source
              </Link>
            </Menu.Item>
            <Menu.Item fitted>
            <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md#Contact">
              Contact us
            </Link>
          </Menu.Item>
          </Menu.Menu>
        </NavBar>
      </Container>
    </Header>
  );
}

export default NavMenu;
