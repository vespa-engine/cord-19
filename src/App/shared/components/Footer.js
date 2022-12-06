import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Link from 'App/shared/components/Link';
import { Segment, Image } from 'semantic-ui-react';
import logo from 'App/shared/img/Vespa_Logo_FullWhite.svg';
import { Container } from 'semantic-ui-react';

const FooterBox = styled(Box)`
  &&& {
    width: 100%;
    margin: auto 0 0;
    background-color: ${({ page }) =>
      page === 'main' ? 'transparent' : '#005a8e'};

    .ui {
      margin: 0;
      border: 0;
      color: white;
      box-shadow: none;
    }

    .ui.segment {
      padding: 1em 0em;
    }

    .ui.segment.sides {
      width: 200px;
      padding: 0;
    }

    a {
      font-weight: bold;
      color: white;
    }

    a:hover {
      color: #ffc43c;
    }

    .ui.image {
      width: 100px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0px;
      margin: auto;
    }
  }
`;

function Footer({ page = null }) {
  return (
    <FooterBox page={page}>
      <Container>
        <Segment.Group horizontal size="small">
          <Segment basic textAlign={page === 'main' ? 'center' : 'left'}>
            <Link to="https://blog.allenai.org/sunsetting-cord-19-239fb2f9ff4a">
              COVID-19 Open Research Dataset (CORD-19)
            </Link>
            <br /> Version 2022-06-02 <br />
            Copyright Yahoo Licensed under{' '}
            <Link to="https://github.com/vespa-engine/cord-19/blob/master/LICENSE">
              Apache License 2.0
            </Link>
          </Segment>
          {page !== 'main' && (
            <Segment className="sides" basic>
              <Link to="https://vespa.ai">
                <Image src={logo} />
              </Link>
            </Segment>
          )}
        </Segment.Group>
      </Container>
    </FooterBox>
  );
}

export default Footer;
