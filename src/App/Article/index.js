import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { navigate } from '@reach/router';
import { Container, Header, Tab, List } from 'semantic-ui-react';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from 'App/Search/ResultCard';
import Link from 'App/shared/components/Link';
import { nameFormatter } from 'App/shared/utils/formatter';
import Footer from 'App/shared/components/Footer';

const ContainerContent = styled(Container)`
  &&& {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

function Authors({ authors }) {
  if (!authors) return null;
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
      {doi && (
        <List.Item>
          <List.Header>Doi</List.Header>
          <Link to={doi}>{doi.replace('https://doi.org/', '')}</Link>
        </List.Item>
      )}
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
      {source && (
        <List.Item>
          <List.Header>Source</List.Header>
          {source}
        </List.Item>
      )}
      {license && (
        <List.Item>
          <List.Header>License</List.Header>
          {license}
        </List.Item>
      )}
    </List>
  );
}

function Content({
  title,
  abstract,
  abstract_t5,
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
      {abstract && (
        <>
          <Header as="h3">Abstract</Header>
          <p>{abstract}</p>
          {abstract_t5 && (
            <>
              <Header as="h3">Machine Generated Summary</Header>
              <p>{abstract_t5}</p>
            </>
          )}
        </>
      )}
      <Meta {...{ journal, timestamp, source, license, doi }} />
    </ContainerContent>
  );
}

function Related({ id, specter }) {
  const query = new URLSearchParams();
  query.set('id', id);
  query.set('summary', 'short');
  query.set('hits', 5);
  query.set('collapse.enable', 'true');
  if (specter) query.set('use-specter', true);
  const { loading, response, error } = Get(
    '/search/?' + query.toString()
  ).state();

  if (loading) return <Loading message="Searching..." />;
  if (error)
    return <Error message={error.message || 'Unknown search error...'} />;

  if (!('children' in response.root)) return null;
  return (
    <Tab.Pane>
      <React.Fragment>
        {response.root.children.map((article, i) => (
          <ResultCard key={i} {...article} />
        ))}
        <Link to={`/search/?query=related_to:${id}&use-specter=${specter}`}>
          Show more
        </Link>
      </React.Fragment>
    </Tab.Pane>
  );
}

function Article({ id }) {
  const url = new URL(window.location);
  const { loading, response, error } = Get(
    `/document/v1/covid-19/doc/docid/${id}`
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  const panes = [
    {
      menuItem: 'Similar articles, powered by specter embedding search',
      render: () => <Related id={response.fields.id} specter={true} />,
    },
  ];

  return (
    <React.Fragment>
      <ContainerContent>
        <Content {...response.fields} />
        <Tab
          panes={panes}
          defaultActiveIndex={url.searchParams.get('tab') || 0}
          onTabChange={(e, tabInfo) => {
            // Reset all query params when changing tab
            [...url.searchParams.keys()].forEach(k =>
              url.searchParams.delete(k)
            );
            url.searchParams.set('tab', tabInfo.activeIndex);
            navigate(url);
          }}
        />
      </ContainerContent>
      <Footer />
    </React.Fragment>
  );
}

export default Article;
