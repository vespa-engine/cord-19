import React from 'react';
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

  .cardLink {
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: inherit;
  }

  .cardLink:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

function formatText(text) {
  const fixedText = text
    .replace(/<sep \/>/g, '…')
    .replace(/<(\/?)hi>/g, '<$1b>');
  if (!fixedText) return null;
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: fixedText,
      }}
    />
  );
}

function Date({ date }) {
  return !date ? null : (
    <span title={date.length === 4 ? date : undefined}>
      {date.substring(0, 4)}
    </span>
  );
}

function ResultCard({
  fields: { id, title, datestring, journal, abstract, body_text },
}) {
  const content = formatText(abstract || body_text);
  return (
    <StyledCard>
      <Link to={`/article/${id}`} className="cardLink">
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {journal}
          <Date date={datestring} />
        </Card.Meta>
        {content && <Card.Content>{content}</Card.Content>}
      </Link>
    </StyledCard>
  );
}

export default ResultCard;
