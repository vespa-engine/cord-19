import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Icon, Label, Popup } from 'semantic-ui-react';
import Moment from 'react-moment';
import Link from 'App/shared/components/Link';
import { nameFormatter } from 'App/shared/utils/formatter';

const StyledCard = styled(Card)`
  && {
    box-shadow: none;
    margin-bottom: 2em;

    a {
      color: #005a8e;
    }

    a:hover {
      color: #1a7db6;
    }
  }

  &.card {
    width: 100%;
  }

  .header {
    font-weight: bold;
    padding: 5px;
  }

  &.card .meta {
    font-size: 0.9em;
    padding: 0 0.5em;
    color: rgba(48, 48, 48, 0.5);

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
    padding: 0.3em 0.5em;
    border: 0;
  }
`;

const ExplanationIcon = styled(Icon)`
  &&.icon {
    margin: 0 0 0 0.5em;
  }
`;

const highlightRegex = /<hi>(.*?)<\/hi>/g;
const formatText = text => {
  if (!text) return null;
  return (
    text
      .replace(/<sep \/>/g, '…')
      .split(highlightRegex)
      // The highlighted sections will be every other element starting at 1, wrap these in bold while keep others as strings
      .map((r, i) => (i % 2 === 0 ? r : <b key={i}>{r}</b>))
  );
};

// Link which has a dummy target which is ignored, only triggers the onClick callback
const FunctionLink = ({ onClick, ...props }) => (
  <a
    href="#root"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {props.children}
  </a>
);

function Explanation({ text }) {
  return (
    <Popup
      content={text}
      trigger={
        <span>
          <ExplanationIcon name="question circle" />
        </span>
      }
    />
  );
}

function JournalAndDate({ journal, timestamp }) {
  const format = journal ? ' (YYYY-MM-DD)' : 'YYYY-MM-DD';
  return (
    <>
      {journal && (
        <>
          <b>Journal:</b> {journal}
        </>
      )}
      {timestamp > 0 ? (
        <Moment format={format} unix utc>
          {timestamp * 1000}
        </Moment>
      ) : null}
    </>
  );
}

function DoiLink({ doi }) {
  if (!doi) return null;
  return (
    <Link className="ui doi" to={doi}>
      {doi.replace('https://doi.org/', 'doi:')}
    </Link>
  );
}

function SourceAndCitations({ source, citations_count_total }) {
  const showCitations = citations_count_total > 0;
  if (!source && !showCitations) return null;
  return (
    <div>
      {source && (
        <>
          <b>Source: </b>
          {source}
        </>
      )}
      {source && showCitations && <>, </>}
      {showCitations && (
        <>
          <b>Citations: </b>
          {citations_count_total}
        </>
      )}
    </div>
  );
}

function AuthorsList({ authors }) {
  const [showAll, setShowAll] = useState(false);

  if (!authors) return null;
  const limit = showAll || authors.length < 12 ? authors.length : 10;
  return (
    <div>
      <b>Authors: </b>
      {authors
        .map(nameFormatter)
        .slice(0, limit)
        .join(', ')}
      {limit < authors.length ? (
        <>
          {' '}
          <FunctionLink onClick={() => setShowAll(true)}>
            and {authors.length - limit} more
          </FunctionLink>
        </>
      ) : null}
    </div>
  );
}

function ResultCard({
  fields: {
    id,
    title,
    timestamp,
    journal,
    doi,
    abstract,
    abstract_t5,
    body_text,
    authors,
    source,
    citations_count_total,
  },
  onSearchSimilar,
  isFieldSetAll,
}) {
  const content = formatText(abstract);
  const body = formatText(body_text);
  const plainTitle = title.replace(highlightRegex, '$1');
  return (
    <StyledCard>
      <Card.Header>
        <Link to={`/article/${id}`}>{plainTitle}</Link>
      </Card.Header>
      <Card.Meta>
        <JournalAndDate {...{ journal, timestamp }} />
        <DoiLink doi={doi} />
        <SourceAndCitations {...{ source, citations_count_total }} />
        <AuthorsList authors={authors} />
      </Card.Meta>
      {(content || onSearchSimilar) && (
        <Card.Content>
          {content && (
            <div>
              <Popup
                position="top center"
                content="This is a dynamic summary of the abstract of the paper, showing the matched query terms and surrounding context."
                trigger={<Label horizontal>Abstract</Label>}
              />
              {content}
            </div>
          )}
          {body && (
            <div>
              <Popup
                position="top center"
                content="This is a dynamic summary of the body of the paper, showing the matched query terms and surrounding context."
                trigger={<Label horizontal>Full Text</Label>}
              />
              {body}
            </div>
          )}
          {abstract_t5 && (
            <div>
              <Label horizontal>
                Machine Generated Summary
                <Explanation text="This is a short summary of the abstract, generated using a Natural Language Processing Model (T5)." />
              </Label>
              {formatText(abstract_t5)}
            </div>
          )}
          {onSearchSimilar && (
            <FunctionLink onClick={onSearchSimilar}>
              Search for similar articles
            </FunctionLink>
          )}
        </Card.Content>
      )}
    </StyledCard>
  );
}

export default ResultCard;
