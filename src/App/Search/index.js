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
      border-radius: 0.28571429rem;
    }

    #search_results {
      flex: 1;
    }

    #no_matches {
      text-align: center;
      margin: 2rem;
    }
  }
`;

const appendRelatedToQuery = (query, id) => {
  const relatedToRegex = /(?:^|\s)(related_to:[0-9]+)(?:$|\s)/;
  return query.replace(relatedToRegex, ' ') + ' related_to:' + id;
};

function NoMatches({ query }) {
  return (
    <div id="no_matches">
      <h1>¯\_(ツ)_/¯</h1>
      <br />
      No matches for <b>{query}</b>
    </div>
  );
}

function SearchResults(searchState) {
  const groupingId = 'group:root:0';
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
  const [
    grouping,
    ...articles
  ] = response.root.children.sort(
    ({ id: id1, relevance: rev1 }, { id: id2, relevance: rev2 }) =>
      id1 === groupingId ? -1 : id2 === groupingId ? 1 : rev2 - rev1
  );
  if (articles.length === 0) return <NoMatches {...searchState} />;

  const valuesState = grouping.children.reduce((obj, { label, children }) => {
    obj[label] = children.map(({ value, fields }) => ({
      value,
      count: fields['count()'],
      checked: searchState[label].includes(value),
    }));
    return obj;
  }, {});

  return (
    <div id="wrapper">
      <Sidebar onSearch={onSearch} {...searchState} {...valuesState} />
      <div id="search_results">
        {articles.map((article, i) => (
          <ResultCard
            key={i}
            {...article}
            onSearchSimilar={() =>
              onSearch({
                query: appendRelatedToQuery(
                  searchState.query,
                  article.fields.id
                ),
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

function Search() {
  const searchState = getSearchState();

  return (
    <Container>
      <SearchForm showRanking onSearch={onSearch} {...searchState} />
      <SearchResults {...searchState} />
    </Container>
  );
}

export default Search;
