import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Container, Header, Tab, List } from 'semantic-ui-react';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from 'App/Search/ResultCard';
import Link from 'App/shared/components/Link';

const ContainerContent = styled(Container)`
  &&& {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const nameFormatter = ({ first, middle, last }) => {
  if (!last) return first || middle;
  const matches = [first, middle]
    .filter(s => s)
    .join(' ')
    .match(/(?:(?=^|\s)(\w)|([A-Z]))/g);
  return (matches ? matches.join('') + ' ' : '') + last;
};

function Authors({ authors }) {
  const limit = authors.length;
  return (
    <Header.Subheader>
      {authors
        .map(nameFormatter)
        .slice(0, limit)
        .join(', ')}
    </Header.Subheader>
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

function Related({ title }) {
  const query = new URLSearchParams();
  query.set('type', 'any');
  query.set('hits', '3');
  query.set('query', title);
  query.set('summary', 'short');

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

function CitedBy({ citedBy }) {
  return citedBy.map((id, _) => {
    const { loading, response, error } = Get(
      `/document/v1/covid-19/doc/docid/${id}`
    ).state();

    if (loading) return <Loading message="Loading..." />;
    if (error)
      return (
        <Error message={error.message || `Failed to load article #${id}`} />
      );

    console.log(response);
    return <ResultCard key={id} {...response} />;
  });
}

function Article({ id }) {
  const { loading, response, error } = Get(
    `/document/v1/covid-19/doc/docid/${id}`
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  console.log(response);

  const panes = [
    {
      menuItem: 'Related',
      render: () => <Related title={response.fields.title} />,
    },
    {
      menuItem: 'Cited by',
      render: () => <CitedBy citedBy={response.fields.cited_by} />,
    },
  ];

  return (
    <ContainerContent>
      <Content {...response.fields} />
      <Tab panes={panes} />
    </ContainerContent>
  );
}

export default Article;
