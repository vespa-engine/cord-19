import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Menu, Container, Responsive, Icon, Dropdown } from 'semantic-ui-react';
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

    .item:last-child {
      padding-right: 0 !important;
      margin-right: 0 !important;
    }

    .ui.image {
      width: 100px;
    }

    span {
      color: #ffc43c;
    }

    .dropdown.item .menu {
      background: #005a8e;
      box-shadow: none;
    }
  }
`;

const logo = (
  <Link to="/">
    <span>CORD-19</span> Search and Navigate
  </Link>
);

const items = [
  {
    content: (
      <Link to="https://github.com/vespa-engine/cord-19/blob/master/cord-19-queries.md">
        API
      </Link>
    ),
  },
  {
    content: (
      <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md">
        Open source
      </Link>
    ),
  },
  {
    content: (
      <Link to="https://github.com/vespa-engine/cord-19/blob/master/README.md#Contact">
        Contact us
      </Link>
    ),
  },
];

function Nav({ children }) {
  return (
    <NavBar secondary inverted fluid>
      <Menu.Item header fitted>
        {logo}
      </Menu.Item>
      {children}
    </NavBar>
  );
}

function Mobile() {
  return (
    <Responsive {...Responsive.onlyMobile}>
      <Nav>
        <Menu.Menu position="right">
          <Dropdown item icon={null} trigger={<Icon name="bars" />}>
            <Dropdown.Menu items={items}>
              {items.map((item, idx) => (
                <Dropdown.Item key={idx} {...item} />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Nav>
    </Responsive>
  );
}
function Desktop() {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Nav>
        <Menu.Menu position="right">
          {items.map((item, idx) => (
            <Menu.Item key={idx} {...item} />
          ))}
        </Menu.Menu>
      </Nav>
    </Responsive>
  );
}

function NavMenu() {
  return (
    <Header sx={{ paddingLeft: '0px', paddingRight: '0px' }} width={1}>
      <Container>
        <Desktop />
        <Mobile />
      </Container>
    </Header>
  );
}

export default NavMenu;
