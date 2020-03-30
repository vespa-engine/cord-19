import React from 'react';
import { Container, Header, Tab } from 'semantic-ui-react';
import { Error, Loading } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from 'App/Search/ResultCard';

function Content({ title, abstract }) {
  return (
    <Container text>
      <Header as="h1">{title}</Header>
      <Header as="h3">Abstract</Header>
      <p>{abstract}</p>
    </Container>
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
    <Container>
      <Content {...response.fields} />
      <Tab panes={panes} />
    </Container>
  );
}

export default Article;
