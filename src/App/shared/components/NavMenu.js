import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Image, Menu } from 'semantic-ui-react';
import Link from 'App/shared/components/Link';
import logo from 'App/shared/img/VespaLogoWhite.png';

const NavBar = styled(Menu)`
  &&& {
    height: 64px;
    margin: 0;

    border-bottom: 1px solid rgba(63, 157, 216, 0.25);

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
        <Menu.Item fitted>
          <Link to="https://cloud.vespa.ai/">
            <Image src={logo} />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md">Read more</Link>
          </Menu.Item>
        </Menu.Menu>
      </NavBar>
    </Box>
  );
}

export default NavMenu;
