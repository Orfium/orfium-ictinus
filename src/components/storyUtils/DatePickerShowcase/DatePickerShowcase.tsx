import React, { useState } from 'react';

import Button from '../../Button';
import DatePicker from '../../DatePicker';
import { Range } from '../../DatePicker/OverlayComponent/OverlayComponent';
import { currentDay } from '../../DatePicker/utils';

const DatePickerShowcase: React.FC = () => {
  const [date, setDate] = useState<{ from?: Date; to?: Date }>({
    from: currentDay.toDate(),
    to: currentDay.toDate(),
  });

  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: currentDay.subtract(7, 'days').toDate(),
    to: currentDay.toDate(),
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>Reset DatePicker value (with external component)</h3>
      <DatePicker
        value={date}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isClearable
        onChange={setDate}
      />
      <Button onClick={() => setDate({ from: undefined, to: undefined })}>
        Reset DatePicker value
      </Button>

      <hr />

      <h3>Reset RangePicker value (with external component)</h3>
      <DatePicker
        value={dateRange}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isRangePicker
        isClearable
        dateFormatOverride="MMM D, YYYY"
        onChange={setDateRange}
      />
      <Button onClick={() => setDateRange({ from: undefined, to: undefined })}>
        Reset RangePicker value
      </Button>
    </div>
  );
};

export default DatePickerShowcase;
