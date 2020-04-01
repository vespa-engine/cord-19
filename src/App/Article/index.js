import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Container, Header, Tab, List, Pagination } from 'semantic-ui-react';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from 'App/Search/ResultCard';
import Link from 'App/shared/components/Link';
import { nameFormatter } from 'App/shared/utils/formatter';
import { navigate } from '@reach/router';
import { uniq } from 'lodash';

const ContainerContent = styled(Container)`
  &&& {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Center = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

function Authors({ authors }) {
  return (
    <Header.Subheader>{authors.map(nameFormatter).join(', ')}</Header.Subheader>
  );
}

function Meta({ journal, timestamp, source, license, doi }) {
  const format = journal ? ' (YYYY-MM-DD)' : 'YYYY-MM-DD';
  const date = timestamp ? (
    <Moment format={format} unix utc>
      {timestamp * 1000}
    </Moment>
  ) : null;

  return (
    <List>
      <List.Item>
        <List.Header>Doi</List.Header>
        <Link to={doi}>{doi.replace('https://doi.org/', '')}</Link>
      </List.Item>
      {journal ? (
        <List.Item>
          <List.Header>Journal</List.Header>
          {journal} {date}
        </List.Item>
      ) : (
        <List.Item>
          <List.Header>Date</List.Header>
          {date}
        </List.Item>
      )}
      <List.Item>
        <List.Header>Source</List.Header>
        {source}
      </List.Item>
      <List.Item>
        <List.Header>License</List.Header>
        {license}
      </List.Item>
    </List>
  );
}

function Content({
  title,
  abstract,
  authors,
  doi,
  journal,
  timestamp,
  source,
  license,
}) {
  return (
    <ContainerContent>
      <Header as="h1">{title}</Header>
      <Authors authors={authors} />
      <Header as="h3">Abstract</Header>
      <p>{abstract}</p>
      <Meta {...{ journal, timestamp, source, license, doi }} />
    </ContainerContent>
  );
}

function Related({ id }) {
  const query = new URLSearchParams();
  query.set('id', id);
  query.set('searchChain', 'related-ann');
  query.set('summary', 'short');
  query.set('hits', '3');

  const { loading, response, error } = Get(
    '/search/?' + query.toString()
  ).state();

  if (loading) return <Loading message="Searching..." />;
  if (error)
    return <Error message={error.message || 'Unknown search error...'} />;

  console.log(response);
  if (!('children' in response.root)) return null;
  return (
    <Tab.Pane>
      <React.Fragment>
        {response.root.children.map((article, i) => (
          <ResultCard key={i} {...article} />
        ))}
      </React.Fragment>
    </Tab.Pane>
  );
}

function CitedBy({ citedBy, page, onPageChange }) {
  const numPages = Math.floor((citedBy.length + 9) / 10);
  return (
    <Container>
      {citedBy.slice(10 * (page - 1), 10 * page).map(id => (
        <Citation key={id} id={id} />
      ))}
      {numPages > 1 && (
        <Center>
          <Pagination
            firstItem={null}
            lastItem={null}
            prevItem={null}
            nextItem={null}
            totalPages={numPages}
            defaultActivePage={page}
            onPageChange={(e, { activePage }) => onPageChange(activePage)}
          />
        </Center>
      )}
    </Container>
  );
}

function Citation({ id }) {
  const { loading, response, error } = Get(
    `/document/v1/covid-19/doc/docid/${id}`
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  console.log(response);
  return <ResultCard {...response} />;
}

function Article({ id }) {
  const url = new URL(window.location);
  const { loading, response, error } = Get(
    `/document/v1/covid-19/doc/docid/${id}`
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  console.log(response);

  const citations = uniq([
    ...(response.fields.cited_by || []),
    ...(response.fields.citations_inbound || []).map(c => c.source_id),
  ]);

  const panes = [
    {
      menuItem: 'Related articles',
      render: () => <Related id={response.fields.id} />,
    },
    {
      menuItem: {
        key: 'citations',
        content: `${citations.length} citing articles`,
        disabled: citations.length === 0,
      },
      render: () => (
        <CitedBy
          citedBy={citations}
          page={parseInt(url.searchParams.get('page')) || 1}
          onPageChange={page => {
            if (page >= 1 && page - 1 <= citations.length / 10) {
              url.searchParams.set('page', page);
              navigate(url);
            }
          }}
        />
      ),
    },
  ];

  return (
    <ContainerContent>
      <Content {...response.fields} />
      <Tab
        panes={panes}
        defaultActiveIndex={url.searchParams.get('tab') || 0}
        onTabChange={(e, tabInfo) => {
          // Reset all query params when changing tab
          [...url.searchParams.keys()].forEach(k => url.searchParams.delete(k));
          url.searchParams.set('tab', tabInfo.activeIndex);
          navigate(url);
        }}
      />
    </ContainerContent>
  );
}

export default Article;
