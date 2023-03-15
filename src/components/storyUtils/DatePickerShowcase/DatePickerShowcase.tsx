import React, { useState } from 'react';

import Button from '../../Button';
import DatePicker from '../../DatePicker';

const DatePickerShowcase: React.FC = () => {
  const [date, setDate] = useState<{ from?: Date; to?: Date }>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DatePicker
        value={date}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isDefaultNow={false}
      />
      <Button onClick={() => setDate({ from: undefined, to: undefined })}>
        Reset DatePicker value
      </Button>

      <hr />

      <DatePicker
        value={dateRange}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isRangePicker
        isClearable={true}
        isDefaultNow={false}
        dateFormatOverride="MMM D, YYYY"
      />
      <Button onClick={() => setDateRange({ from: undefined, to: undefined })}>
        Reset RangePicker value
      </Button>
    </div>
  );
};

export default DatePickerShowcase;
