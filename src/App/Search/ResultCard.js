import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import Moment from 'react-moment';
import Link from 'App/shared/components/Link';

const StyledCard = styled(Card)`
  &.card {
    width: 100%;
  }

  .header {
    font-weight: bold;
    padding: 5px;
  }

  .meta {
    padding: 3px 5px;

    a.doi {
      float: right;
    }
  }

  .meta:after {
    content: '';
    display: table;
    clear: both;
  }

  && .content {
    padding: 0.5em;
  }
`;

const isValidDoi = doi => doi && doi !== 'https://doi.org/None'; // TODO: Fix in documents
const highlightReplacer = (text, replace) =>
  text.replace(/<(\/?)hi>/g, replace);
const formatText = text => {
  if (!text) return null;
  const fixedText = highlightReplacer(text.replace(/<sep \/>/g, '…'), '<$1b>');
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: fixedText,
      }}
    />
  );
};

const nameFormatter = ({ first, middle, last }) => {
  if (!last) return first || middle;
  const matches = [first, middle]
    .filter(s => s)
    .join(' ')
    .match(/(?:(?=^|\s)(\w)|([A-Z]))/g);

  return (matches ? matches.join('') + ' ' : '') + last;
};

function JournalAndDate({ journal, timestamp }) {
  const format = journal ? ' (YYYY)' : 'YYYY';
  return (
    <>
      {journal}
      {timestamp > 0 ? (
        <Moment format={format} unix utc>
          {timestamp * 1000}
        </Moment>
      ) : null}
    </>
  );
}

function DoiLink({ doi }) {
  if (!isValidDoi(doi)) return null;
  return (
    <Link className="ui doi" to={doi}>
      {doi.replace('https://doi.org/', 'doi:')}
    </Link>
  );
}

function AuthorsList({ authors }) {
  const [showAll, setShowAll] = useState(false);
  const onShowAll = e => {
    e.preventDefault();
    setShowAll(true);
  };

  if (!authors) return null;
  const limit = showAll || authors.length < 12 ? authors.length : 10;
  return (
    <div>
      {authors
        .map(nameFormatter)
        .slice(0, limit)
        .join(', ')}
      {limit < authors.length ? (
        <>
          {' '}
          <a href="#root" onClick={onShowAll}>
            and {authors.length - limit} more
          </a>
        </>
      ) : null}
    </div>
  );
}

function ResultCard({
  fields: { id, title, timestamp, journal, doi, abstract, authors },
}) {
  const content = formatText(abstract);
  const plainTitle = highlightReplacer(title, '');
  return (
    <StyledCard>
      <Card.Header>
        {/* TODO: Link to /article/:id */}
        {isValidDoi(doi) ? (
          <Link to={doi}>{plainTitle}</Link>
        ) : (
          <>{plainTitle}</>
        )}
      </Card.Header>
      <Card.Meta>
        <JournalAndDate {...{ journal, timestamp }} />
        <DoiLink doi={doi} />
        <AuthorsList authors={authors} />
      </Card.Meta>
      {content && <Card.Content>{content}</Card.Content>}
    </StyledCard>
  );
}

export default ResultCard;
