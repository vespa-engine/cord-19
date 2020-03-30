import React, { useState } from 'react';
import styled from 'styled-components';
import { default as DRP } from '@wojtekmaj/react-daterange-picker';
import * as moment from 'moment';

const StyledDRP = styled(DRP)`
  && {
    display: block;
  }

  & div.react-daterange-picker__wrapper {
    display: none;
  }
`;

const formatter = date => moment(date).format('YYYY-MM-DD');

/**
 * The default input consists of 6 input fields which is difficult to work with, this is a wrapper that hides the
 * original inputs and replaces with a single readonly input */
function DateRangePicker({ value, ...props }) {
  const [calOpen, setCalOpen] = useState(false);
  value = value.length === 2 ? value : null;
  const inputValue = value ? value.map(formatter).join(' - ') : '';

  return (
    <>
      <input
        readOnly
        onClick={() => setCalOpen(!calOpen)}
        className="react-daterange-picker__wrapper"
        placeholder="Enter date range..."
        value={inputValue}
      />
      <StyledDRP
        isOpen={calOpen}
        onCalendarClose={() => setCalOpen(false)}
        {...(value && { value })}
        {...props}
      />
    </>
  );
}

export default DateRangePicker;
