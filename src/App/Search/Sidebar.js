import React from 'react';
import styled from 'styled-components';
import { Checkbox, Form } from 'semantic-ui-react';

const PaddedCheckbox = styled(Checkbox)`
  && {
    display: block;
    padding: 2px;
  }
`;

function Checkboxes({ name, field, values, onSearch }) {
  if (values.length === 0) return null;
  const onChange = (event, { value, checked }) => {
    const selected = values
      .filter(({ value: oValue, checked: oChecked }) =>
        oValue === value ? checked : oChecked
      )
      .map(({ value: oValue }) => oValue);
    onSearch({ [field]: selected });
  };

  return (
    <Form.Field>
      <label>{name}</label>
      {values
        .filter(
          ({ value }) =>
            value.length > 0 && !(field === 'year' && value === '1970')
        )
        .map(({ value, count, checked }, i) => (
          <PaddedCheckbox
            key={i}
            name={name}
            value={value}
            onChange={onChange}
            label={`${value} (${count})`}
            checked={checked}
          />
        ))}
    </Form.Field>
  );
}

function Sidebar({ journal, source, year, author, has_full_text, onSearch }) {
  return (
    <div
      id="sidebar"
      className="ui form"
      style={{ backgroundColor: '#f2f8ff' }}
    >
      <Checkboxes
        name="Source"
        field="source"
        values={source}
        onSearch={onSearch}
      />
      <Checkboxes
        name="Journal"
        field="journal"
        values={journal}
        onSearch={onSearch}
      />
      <Checkboxes
        name="Published"
        field="year"
        values={year}
        onSearch={onSearch}
      />
      <Checkboxes
        name="Author"
        field="author"
        values={author}
        onSearch={onSearch}
      />
      <Checkboxes
        name="Full text"
        field="has_full_text"
        values={has_full_text}
        onSearch={onSearch}
      />
    </div>
  );
}

export default Sidebar;
