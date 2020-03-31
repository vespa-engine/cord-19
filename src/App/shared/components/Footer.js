import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Link from 'App/shared/components/Link';
import { Segment, Image } from 'semantic-ui-react';
import logo from 'App/shared/img/VespaLogoWhite.png';

const FooterBox = styled(Box)`
  &&& {
    width: 100%;
    margin: auto 0 0;
    border-top: 1px solid rgba(63, 157, 216, 0.25);

    .ui {
      background-color: #3f9cd8;
      margin: 0;
      border: 0;
      color: white;
      text-align: center;
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
      right: 15px;
      margin: auto;
    }
  }
`;

function Footer() {
  return (
    <FooterBox>
      <Segment.Group horizontal inverted>
        <Segment className="sides" />
        <Segment>
          <Link to="https://pages.semanticscholar.org/coronavirus-research">
            COVID-19 Open Research Dataset (CORD-19)
          </Link>
          . 2020. Version 2020-03-27. Accessed 2020-03-28.{' '}
          <Link to="https://doi.org/10.5281/zenodo.3727291">
            doi:10.5281/zenodo.3727291
          </Link>
          <br />
          Copyright Verizon Media 2020 Licensed under{' '}
          <Link to="https://github.com/vespa-engine/cord-19/blob/master/LICENSE">
            Apache License 2.0
          </Link>
        </Segment>
        <Segment className="sides">
          <Link to="/">
            <Image src={logo} />
          </Link>
        </Segment>
      </Segment.Group>
    </FooterBox>
  );
}

export default Footer;
