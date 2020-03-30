import React from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
import { default as TI } from 'react-tagsinput';
import DateRangePicker from 'App/shared/components/DateRangePicker';

const TagsInput = styled(TI)`
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;

  .react-tagsinput-tag {
    background-color: #cceaf5;
    color: #000;
    border: 0;
    margin: 2px;
  }

  &&& input {
    border: none;
    //    padding: 0.3em;
  }
`;

function Sidebar({ journals, sources, timestamp, onSearch }) {
  const dateRange = timestamp.split(';').map(t => new Date(1000 * parseInt(t)));
  const searchTimestamp = dateRange =>
    onSearch({
      timestamp: dateRange.map(d => Math.floor(d.getTime() / 1000)).join(';'),
    });
  const searchTags = (field, tags) => onSearch({ [field]: tags });

  return (
    <div id="sidebar" className="ui form">
      <Form.Field>
        <label>Source</label>
        <TagsInput
          onlyUnique
          placeholder="e.g. 'medrxiv' or 'WHO'"
          value={sources}
          onChange={tags => searchTags('source', tags)}
        />
      </Form.Field>
      <Form.Field>
        <label>Journal</label>
        <TagsInput
          onlyUnique
          placeholder="e.g. 'Clinical Infectious Diseases'"
          value={journals}
          onChange={tags => searchTags('journal', tags)}
        />
      </Form.Field>
      <Form.Field>
        <label>Published</label>
        <DateRangePicker value={dateRange} onChange={searchTimestamp} />
      </Form.Field>
      <Form.Field>
        <label>Author</label>
        <TagsInput
          onlyUnique
          placeholder="e.g. ..."
          value={[]}
          onChange={() => {}}
        />
      </Form.Field>
    </div>
  );
}

export default Sidebar;
