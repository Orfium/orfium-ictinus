/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import 'react-day-picker/lib/style.css';
import dayjs, { Dayjs } from 'dayjs';
import OverlayComponent, { Range } from './OverlayComponent/OverlayComponent';
import { formFieldStyles } from 'theme/palette';

export type DisabledDates = {
  daysOfWeek?: number[];
  after?: Date;
  before?: Date;
};

export type Props = {
  /** This boolean shows if the date picker will have the future dates available to select. Default: false */
  disableFutureDates?: boolean;
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (date: Dayjs) => void;
  /** Option to disable some dates */
  disableDates?: DisabledDates;
  /** Value to define if needed an initial state or to handle it externally */
  value?: Dayjs;
  /** The label that the input will use to show it. Default: Date */
  inputLabel?: string;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** The format of the date displayed in the input field */
  dateFormatOverride?: DateFormatType;
};

export type ExtraOption = { value: string; label: string; dates: Dayjs[] };

export type DateFormatType =
  | 'MM/DD/YYYY'
  | 'MMMM D, YYYY'
  | 'dddd, MMMM D, YYYY'
  | 'M/D/YYYY'
  | 'MMM D, YYYY'
  | 'ddd, MMM D, YYYY';

const extraOptions: ExtraOption[] = [
  {
    value: 'last-7-days',
    label: 'Last 7 days',
    dates: [dayjs().subtract(7, 'day'), dayjs()],
  },
  {
    value: 'last-30-days',
    label: 'Last 30 days',
    dates: [dayjs().subtract(30, 'day'), dayjs()],
  },

  {
    value: 'custom',
    label: 'Custom',
    dates: [dayjs()],
  },
];

const DatePicker: React.FC<Props> = ({
  disableFutureDates = false,
  isRangePicker = false,
  onChange,
  disableDates,
  value = {
    from: undefined,
    to: undefined,
  },
  inputLabel = 'Date',
  styleType = 'filled',
  dateFormatOverride = undefined,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>({
    from: undefined,
    to: undefined,
  });

  const handleSelectedOptions = (option: string) => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);

    if (foundOption) {
      setRange(
        Array.isArray(foundOption.dates)
          ? { from: foundOption.dates[0], to: foundOption.dates[1] }
          : { from: foundOption.dates, to: foundOption.dates }
      );
    }

    setSelectedOption(option);
  };

  const setRangePick = useCallback(
    (day: Dayjs) => {
      const startOfDay = day.startOf('day');
      const endOfDay = day.endOf('day');
      // in case is a day picker
      if (!isRangePicker) {
        return setRange(range => {
          if (range.from && range.to && day.isBetween(range.from, range.to)) {
            return { from: undefined, to: undefined };
          }

          return { from: startOfDay, to: endOfDay };
        });
      }

      // in case is range picker
      return setRange(range => {
        if (range.from && range.to) {
          return { from: startOfDay, to: undefined };
        }

        if (!range.from) {
          return { ...range, from: startOfDay };
        }

        return { ...range, to: endOfDay };
      });
    },
    [isRangePicker]
  );

  return (
    <div css={datePickerStyles({ isRangePicker })}>
      <div>selected from {range.from?.format()}</div>
      <div>selected to {range.to?.format()}</div>
      <OverlayComponent
        selectedOption={selectedOption}
        setSelectedOption={handleSelectedOptions}
        extraOptions={extraOptions}
        isRangePicker={isRangePicker}
        onDaySelect={setRangePick}
        selectedDays={range}
        disabledDates={disableDates}
      />
    </div>
  );
};

export default DatePicker;
