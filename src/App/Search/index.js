import React from 'react';
import styled from 'styled-components';
import SearchForm from 'App/shared/components/SearchForm';
import { Loading, Error } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from './ResultCard';

const Container = styled.div`
  &&& {
    font-size: 1.1rem;
    width: 100%;
    max-width: 1000px;
    margin: 2rem auto;

    .column {
      padding: 0;
    }
  }
`;

function SearchResults() {
  const query = new URLSearchParams(window.location.search);
  query.set('type', 'any');
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
    <React.Fragment>
      {response.root.children.map((article, i) => (
        <ResultCard key={i} {...article} />
      ))}
    </React.Fragment>
  );
}

function Search() {
  return (
    <Container>
      <SearchForm />
      <SearchResults />
    </Container>
  );
}

export default Search;
