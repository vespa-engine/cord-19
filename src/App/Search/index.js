import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchForm from 'App/shared/components/SearchForm';
import { Loading, Error } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';
import ResultCard from './ResultCard';
import Sidebar from './Sidebar';
import { Container } from 'semantic-ui-react';
import { generateApiQueryParams, getSearchState, onSearch } from './Utils';
import Footer from 'App/shared/components/Footer';

const ContainerSearch = styled(Container)`
  &&& {
    font-size: 1rem;
    width: 100%;
    margin: 0.5em auto 0;
    padding: 2rem 0;
    display: flex;

    #sidebar {
      width: 30%;
      max-width: 250px;
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
  return query.replace(relatedToRegex, ' ').trim() + ' related_to:' + id;
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

function SearchResults({ articles, query, loading, error }) {
  if (loading) return <Loading message="Searching..." />;
  if (error)
    return <Error message={error.message || 'Unknown search error...'} />;

  if (articles.length === 0) return <NoMatches query={query} />;

  return (
    <>
      {articles.map((article, i) => (
        <ResultCard
          key={i}
          {...article}
          onSearchSimilar={() =>
            onSearch({
              query: appendRelatedToQuery(query, article.fields.id),
            })
          }
        />
      ))}
    </>
  );
}

function Search() {
  const searchState = getSearchState();
  const groupingId = 'group:root:0';
  const query = generateApiQueryParams();
  query.set('type', 'any');
  query.set('summary', 'short');
  query.set('restrict', 'doc');
  query.set('hits', '20');

  const { loading, response, error } = Get(
    '/search/?' + query.toString()
  ).state();
  const [grouping, setGrouping] = useState();

  const [groupingResponse, ...articles] = (
    response?.root?.children || []
  ).sort(({ id: id1, relevance: rev1 }, { id: id2, relevance: rev2 }) =>
    id1 === groupingId ? -1 : id2 === groupingId ? 1 : rev2 - rev1
  );

  useEffect(() => {
    if (loading) return;
    setGrouping(groupingResponse);
  }, [groupingResponse, setGrouping, loading]);

  const valuesState = !grouping
    ? {}
    : grouping.children.reduce((obj, { label, children }) => {
        obj[label] = children.map(({ value, fields }) => ({
          value,
          count: fields['count()'],
          checked: searchState[label].includes(value),
        }));
        return obj;
      }, {});

  return (
    <React.Fragment>
      <ContainerSearch>
        <Sidebar onSearch={onSearch} {...valuesState} />
        <div id="search_results">
          <SearchForm showRanking onSearch={onSearch} {...searchState} />
          <SearchResults
            query={searchState.query}
            {...{ articles, loading, error }}
          />
        </div>
      </ContainerSearch>
      {!loading && <Footer />}
    </React.Fragment>
  );
}

export default Search;
