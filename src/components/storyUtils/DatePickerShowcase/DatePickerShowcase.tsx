import React, { useState } from 'react';

import Button from '../../Button';
import DatePicker from '../../DatePicker';
import { currentDay } from '../../DatePicker/utils';
import { DateRange } from 'components/DatePicker/DatePicker.types';

const DatePickerShowcase: React.FC = () => {
  const [date, setDate] = useState<DateRange>({
    from: currentDay.toDate(),
    to: currentDay.toDate(),
  });

  const [dateRange, setDateRange] = useState<DateRange>({
    from: currentDay.subtract(7, 'days').toDate(),
    to: currentDay.toDate(),
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>Reset DatePicker value (with external component)</h3>
      <DatePicker value={date} isClearable onChange={setDate} />
      <Button onClick={() => setDate({ from: undefined, to: undefined })}>
        Reset DatePicker value
      </Button>

      <hr />

      <h3>Reset RangePicker value (with external component)</h3>
      <DatePicker
        value={dateRange}
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
