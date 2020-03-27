import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
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
    padding: 5px;

    span {
      float: right;
    }
  }

  .meta:after {
    content: '';
    display: table;
    clear: both;
  }

  .content {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
    padding: 0.5em;
  }
`;

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

function Date({ date }) {
  return !date ? null : (
    <span title={date.length === 4 ? date : undefined}>
      {date.substring(0, 4)}
    </span>
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
  fields: { id, title, datestring, journal, abstract, body_text, authors },
}) {
  const content = formatText(abstract || body_text);
  return (
    <StyledCard>
      <Card.Header>
        <Link to={`${process.env.PUBLIC_URL}/article/${id}`}>
          {highlightReplacer(title, '')}
        </Link>
      </Card.Header>
      <Card.Meta>
        {journal}
        <Date date={datestring} />
        <AuthorsList authors={authors} />
      </Card.Meta>
      {content && <Card.Content>{content}</Card.Content>}
    </StyledCard>
  );
}

export default ResultCard;
