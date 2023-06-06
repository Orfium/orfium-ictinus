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

  const [clearableDate, setClearableDate] = useState<{ from?: Date; to?: Date }>({
    from: currentDay.toDate(),
    to: currentDay.toDate(),
  });

  const [clearableRange, __setClearableRange] = useState<{ from?: Date; to?: Date }>({
    from: currentDay.subtract(7, 'days').toDate(),
    to: currentDay.toDate(),
  });

  const updateClearableDate = (range: Range) => {
    setClearableDate(range as { from?: Date; to?: Date });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>Reset DatePicker value (with external component)</h3>
      <DatePicker
        value={date}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isDefaultNow={false}
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
        isDefaultNow={false}
        dateFormatOverride="MMM D, YYYY"
      />
      <Button onClick={() => setDateRange({ from: undefined, to: undefined })}>
        Reset RangePicker value
      </Button>

      <hr />

      <h3>Clearable DatePicker (with isClearable prop)</h3>
      <DatePicker
        value={clearableDate}
        onChange={updateClearableDate}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isDefaultNow={false}
        isClearable
      />

      <p>{`${clearableDate.from} - ${clearableDate.to}`}</p>

      <hr />

      <h3>Reset RangePicker value (with isClearable prop)</h3>
      <DatePicker
        value={clearableRange}
        inputProps={{ size: 'md', styleType: 'outlined' }}
        isRangePicker
        isDefaultNow={false}
        isClearable
        dateFormatOverride="MMM D, YYYY"
      />

      <p>{`${clearableRange.from} - ${clearableRange.to}`}</p>
    </div>
  );
};

export default DatePickerShowcase;
