import React from 'react';
import styled from 'styled-components';
import SearchForm from 'App/shared/components/SearchForm';
import { Loading, Error } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from './ResultCard';
import Sidebar from './Sidebar';
import { generateApiQueryParams, getSearchState, onSearch } from './Utils';

const Container = styled.div`
  &&& {
    font-size: 1.1rem;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 2rem 0.5rem;

    #wrapper {
      display: flex;
      margin-top: 1em;
    }

    #sidebar {
      width: 30%;
      max-width: 300px;
      height: fit-content;
      margin-right: 1em;
      padding: 0.5em;
      box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
      border-radius: 0.28571429rem;
    }

    #search_results {
      flex: 1;
    }
  }
`;

function SearchResults(searchState) {
  const query = generateApiQueryParams();
  query.set('type', 'any');
  query.set('summary', 'short');
  query.set('restrict', 'doc');
  query.set('hits', '20');

  const { loading, response, error } = Get(
    '/search/?' + query.toString()
  ).state();

  if (loading) return <Loading message="Searching..." />;
  if (error)
    return <Error message={error.message || 'Unknown search error...'} />;

  console.log(response);
  if (!('children' in response.root)) return null;
  return (
    <div id="wrapper">
      <Sidebar onSearch={onSearch} {...searchState} {...valuesState} />
      <div id="search_results">
        {articles.map((article, i) => (
          <ResultCard key={i} {...article} />
        ))}
      </div>
    </div>
  );
}

function Search() {
  const searchState = getSearchState();

  return (
    <Container>
      <SearchForm onSearch={onSearch} {...searchState} />
      <SearchResults {...searchState} />
    </Container>
  );
}

export default Search;
