import React from 'react';
import styled from 'styled-components';
import { Loading, Error } from 'App/shared/components/Messages';
import { Get } from 'App/shared/Fetcher';

function Content({ title, abstract }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>Abstract</h4>
      {abstract}
    </>
  );
}

function Article({ id }) {
  const { loading, response, error } = Get(
    `/document/v1/covid-19/doc/docid/${id}`
  ).state();

  if (loading) return <Loading message="Loading..." />;
  if (error)
    return <Error message={error.message || `Failed to load article #${id}`} />;

  console.log(response);

  return <Content {...response.fields} />;
}

export default Article;
