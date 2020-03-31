import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Link from 'App/shared/components/Link';

const FooterBox = styled(Box)`
  &&& {
    width: 100%;
    margin: auto 0 0;
    padding: 1rem 0;
    border-top: 1px solid rgba(63, 157, 216, 0.25);
    background-color: #3f9cd8;
    color: white;
    text-align: center;

    a {
      font-weight: bold;
      color: white;
    }

    a:hover {
      color: #ffc43c;
    }
  }
`;

function Footer() {
  return (
    <FooterBox>
      <Segment.Group class="test" inverted></Segment.Group>
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
    </FooterBox>
  );
}

export default Footer;
