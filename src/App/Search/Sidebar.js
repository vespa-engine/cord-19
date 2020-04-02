import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const filters = [
  { name: 'Source', field: 'source' },
  {
    name: 'Journal',
    field: 'journal',
  },
  {
    name: 'Published',
    field: 'year',
  },
  {
    name: 'Author',
    field: 'author',
  },
  {
    name: 'Full text',
    field: 'has_full_text',
  },
];

const PaddedCheckbox = styled(Checkbox)`
  && {
    display: block;
    padding: 2px;
    font-size: 0.9em;
  }
`;

function Checkboxes({ name, field, values, onSearch }) {
  if (!values || values.length === 0) return null;
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

function Sidebar({ onSearch, ...filterValues }) {
  return (
    <div
      id="sidebar"
      className="ui form"
      style={{ backgroundColor: '#f2f8ff' }}
    >
      <Button
        fluid
        style={{
          marginBottom: '0.5em',
          background: 'rgba(63,157,216,0.1) none',
          color: '#3f9dd8',
        }}
        onClick={() =>
          onSearch(
            filters.reduce((obj, { field }) => ({ ...obj, [field]: [] }), {})
          )
        }
      >
        Clear all
      </Button>
      {filters.map(({ name, field }) => (
        <Checkboxes
          key={field}
          name={name}
          field={field}
          values={filterValues[field]}
          onSearch={onSearch}
        />
      ))}
    </div>
  );
}

export default Sidebar;
