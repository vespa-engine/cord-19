import React from 'react';
import styled from 'styled-components';
import { Container, Header, Tab, List } from 'semantic-ui-react';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from 'App/Search/ResultCard';

const ContainerContent = styled(Container)`
  &&& {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

function Authors({ authors }) {
  return (
    <List horizontal>
      {authors.map(({ name, last }) => (
        <List.Item key={name}>{`${name} ${last}`}</List.Item>
      ))}
    </List>
  );
}

function Doi({ doi }) {
  return (
    <List>
      <List.Item as="li">
        <a href={doi} target="_blank" rel="noopener noreferrer">
          {doi}
        </a>
      </List.Item>
    </List>
  );
}

function Content({ title, abstract, authors, doi }) {
  return (
    <ContainerContent>
      <Header as="h1">{title}</Header>
      <Authors authors={authors} />
      <Doi doi={doi} />
      <Header as="h3">Abstract</Header>
      <p>{abstract}</p>
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
