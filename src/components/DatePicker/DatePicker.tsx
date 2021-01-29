/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useRef, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dayjs, { Dayjs } from 'dayjs';
import OverlayComponent, { Range } from './OverlayComponent/OverlayComponent';
import { Modifier } from 'react-day-picker/types/Modifiers';
import { formFieldStyles } from '../../theme/palette';

export type Props = {
  /** This boolean shows if the date picker will have the future dates available to select. Default: false */
  disableFutureDates?: boolean;
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (date: Dayjs) => void;
  /** Option to disable some dates */
  disableDates?: Modifier[];
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
    dates: dayjs(),
  },
];

const DatePicker: React.FC<Props> = ({
  disableFutureDates = false,
  isRangePicker = false,
  onChange,
  disableDates = [],
  value = {
    from: undefined,
    to: undefined,
  },
  inputLabel = 'Date',
  styleType = 'filled',
  dateFormatOverride = undefined,
}) => {
  const dayPickerInputRef = useRef<DayPickerInput>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>({
    from: undefined,
    to: undefined,
  });

  const handleSelectedOptions = (option: string) => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);
    dayPickerInputRef.current?.hideDayPicker();

    if (foundOption) {
      setRange(
        Array.isArray(foundOption.dates)
          ? { from: foundOption.dates[0], to: foundOption.dates[1] }
          : { from: foundOption.dates, to: foundOption.dates }
      );
    }

    setSelectedOption(option);
  };

  const setRangePick = (day: Dayjs) => {
    if (range.from && range.to) {
      return setRange({ from: day, to: undefined });
    }

    if (!range.from) {
      return setRange(range => ({ ...range, from: day }));
    }
    if (!range.to) {
      return setRange(range => ({ ...range, to: day }));
    }
  };

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
      />
    </div>
  );
};

export default DatePicker;
