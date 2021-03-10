/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useEffect, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import dayjs, { Dayjs } from 'dayjs';
import OverlayComponent, { Range } from './OverlayComponent/OverlayComponent';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import DatePickInput from './DatePickInput';
import PositionInScreen from '../utils/PositionInScreen';
import { currentDay, datepickerPropValue } from './utils';

export type DisabledDates = {
  daysOfWeek?: number[];
  after?: Date;
  before?: Date;
};

export type Props = {
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (range: Range) => void;
  /** Option to disable some dates */
  disableDates?: DisabledDates;
  /** Value to define if needed an initial state or to handle it externally */
  value?: {
    from?: Date;
    to?: Date;
  };
  /** Props of the TextField input */
  inputProps?: TextFieldProps;
  /** The format of the date displayed in the input field */
  dateFormatOverride?: DateFormatType;
  /** if the datepicker can be clear with backspace */
  isClearable?: boolean;
};

export type ExtraOption = { value: string; label: string; dates: Dayjs[] };

export type DateFormatType =
  | 'MM/DD/YYYY'
  | 'MMMM D, YYYY'
  | 'dddd, MMMM D, YYYY'
  | 'M/D/YYYY'
  | 'MMM D, YYYY'
  | 'ddd, MMM D, YYYY';

export const extraOptions: ExtraOption[] = [
  {
    value: 'last-7-days',
    label: 'Last 7 days',
    dates: [currentDay.subtract(7, 'day'), currentDay],
  },
  {
    value: 'last-30-days',
    label: 'Last 30 days',
    dates: [currentDay.subtract(30, 'day'), currentDay],
  },
  {
    value: 'custom',
    label: 'Custom',
    dates: [currentDay],
  },
];

const DatePicker: React.FC<Props> = ({
  isRangePicker = false,
  onChange,
  disableDates,
  value = {
    from: datepickerPropValue,
    to: datepickerPropValue,
  },
  inputProps,
  dateFormatOverride = undefined,
  isClearable = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>({ from: dayjs(value.from), to: dayjs(value.to) });
  const [selectedRange, setSelectedRange] = useState<Range>({
    from: dayjs(value.from),
    to: dayjs(value.to),
  });

  const handleSelectedOptions = useCallback((option: string) => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);

    if (foundOption) {
      setRange(
        Array.isArray(foundOption.dates)
          ? { from: foundOption.dates[0], to: foundOption.dates[1] }
          : { from: foundOption.dates, to: foundOption.dates }
      );
    }

    setSelectedOption(option);
  }, []);

  const applyRangeAndClose = useCallback(
    (range: Range) => {
      const startDate = range.to && range.from?.isAfter(range.to) ? range.to : range.from;
      const endDate = range.to && range.from?.isAfter(range.to) ? range.from : range.to;
      const newRange = { from: startDate, to: endDate };

      if (newRange.to) {
        setOpen(false);
      }

      setSelectedRange(newRange);
      if (onChange) {
        onChange(newRange);
      }
    },
    [onChange]
  );

  useEffect(() => {
    if (isRangePicker) {
      applyRangeAndClose(range);
    }
  }, [applyRangeAndClose, isRangePicker, range]);

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

  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClear = useCallback(
    e => {
      if (!isClearable) {
        return false;
      }

      if (e.keyCode === 27) {
        // if escape
        return setOpen(false);
      }

      if (e.keyCode === 8) {
        //backspace
        return setSelectedRange(range => {
          if (range.from && range.to) {
            // setRange(range => ({ ...range, from: undefined }));

            return { ...range, to: undefined };
          }

          return { to: undefined, from: undefined };
        });
      }
    },
    [isClearable]
  );

  const onApply = useCallback(() => {
    applyRangeAndClose(range);
  }, [applyRangeAndClose, range]);

  return (
    <ClickAwayListener onClick={onCancel}>
      <PositionInScreen
        visible={open}
        parent={() => (
          <DatePickInput
            isRangePicker={isRangePicker}
            selectedDay={selectedRange}
            inputProps={inputProps}
            dateFormatOverride={dateFormatOverride}
            handleFocus={handleFocus}
            handleClear={handleClear}
          />
        )}
      >
        <div css={datePickerStyles()}>
          <OverlayComponent
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
            onDaySelect={setRangePick}
            selectedDays={range}
            disabledDates={disableDates}
            onCancel={onCancel}
            onApply={onApply}
          />
        </div>
      </PositionInScreen>
    </ClickAwayListener>
  );
};

export default DatePicker;
