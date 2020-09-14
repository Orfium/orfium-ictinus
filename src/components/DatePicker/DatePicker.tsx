/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { datePickerStyles } from './DatePicker.style';
import useTheme from 'hooks/useTheme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';
import DayPicker, { DateUtils, RangeModifier, DayPickerInputProps } from 'react-day-picker';
import DatePickInput from './DatePickInput/DatePickInput';
import OverlayComponent from './OverlayComponent/OverlayComponent';
import { Modifier } from 'react-day-picker/types/Modifiers';

export type Props = {
  /** This boolean shows if the date picker will have the future dates available to select. Default: false */
  disableFutureDates?: boolean;
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (date: DateRange) => DateRange;
  /** Option to disable some dates */
  disableDates?: Modifier[];
  /** Value to define if needed an initial state or to handle it externally */
  value?: RangeModifier;
};

export type DateRange =
  | RangeModifier
  | {
      from: undefined;
      to: undefined;
    };

export type ExtraOption = { value: string; label: string; dates: Date | Date[] };

const extraOptions: ExtraOption[] = [
  {
    value: 'last-7-days',
    label: 'Last 7 days',
    dates: [
      dayjs()
        .subtract(7, 'day')
        .toDate(),
      dayjs().toDate(),
    ],
  },
  {
    value: 'last-30-days',
    label: 'Last 30 days',
    dates: [
      dayjs()
        .subtract(30, 'day')
        .toDate(),
      dayjs().toDate(),
    ],
  },

  {
    value: 'custom',
    label: 'Custom',
    dates: dayjs().toDate(),
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
}) => {
  const theme = useTheme();
  const dayPickerInputRef = useRef<DayPickerInput>(null);
  const dayPickerRef = useRef<DayPicker>(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<DateRange>(value);

  useEffect(() => {
    if (value.from && value.to) {
      setSelectedDay(value);
    }
  }, [value]);

  const handleCalendarValueChange = useCallback(
    (range, hideDatePicker = false) => {
      setSelectedDay(range);
      setSelectedOption('custom');
      if (onChange) {
        onChange(range);
      }
      if (hideDatePicker) {
        dayPickerInputRef.current?.hideDayPicker();
      }
    },
    [onChange, dayPickerRef, selectedOption, setSelectedDay]
  );

  const handleDayRangeClick = useCallback(
    (day, { disabled }) => {
      if (disabled) {
        return;
      }
      const aboutToCompleteBothDates = selectedDay.from && !selectedDay.to;
      const range = DateUtils.addDayToRange(
        day,
        // @TODO problem with the library as they define RangeModifiers as not null or undefined when they use it like this
        // @ts-ignore
        aboutToCompleteBothDates ? selectedDay : daysInitialState
      );

      handleCalendarValueChange(range, aboutToCompleteBothDates);
    },
    [selectedDay, setSelectedDay, setSelectedOption, dayPickerInputRef, daysInitialState]
  );

  const handleDayClick = useCallback(
    (day, { disabled }) => {
      if (disabled) {
        return;
      }
      const newValue = { from: day, to: day };
      handleCalendarValueChange(newValue, true);
    },
    [setSelectedDay, setSelectedOption, dayPickerInputRef]
  );

  const handleSelectedOptions = (option: string) => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);
    dayPickerInputRef.current?.hideDayPicker();

    if (foundOption) {
      setSelectedDay(
        Array.isArray(foundOption.dates)
          ? { from: foundOption.dates[0], to: foundOption.dates[1] }
          : { from: foundOption.dates, to: foundOption.dates }
      );
    }

    setSelectedOption(option);
  };

  const modifiers = { start: selectedDay.from, end: selectedDay.to };
  const dayPickerProps = {
    ref: dayPickerRef,
    onDayClick: isRangePicker ? handleDayRangeClick : handleDayClick,
    selectedDays: selectedDay as RangeModifier,
    modifiers,
    firstDayOfWeek: 1,
    numberOfMonths: isRangePicker ? 2 : 1,
    disabledDays: disableFutureDates
      ? [
          {
            after: new Date(),
          },
          ...disableDates,
        ]
      : disableDates,
  };

  return (
    <div css={datePickerStyles({ isRangePicker })(theme)}>
      <DayPickerInput
        ref={dayPickerInputRef}
        onDayPickerShow={() => {
          dayPickerRef.current?.showMonth(selectedDay.from || dayjs().toDate());
        }}
        overlayComponent={(props: DayPickerInputProps) => (
          <OverlayComponent
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
            hideDatePicker={() => dayPickerInputRef.current?.hideDayPicker()}
            {...props}
          />
        )}
        dayPickerProps={dayPickerProps}
        component={(props: DayPickerInputProps) => (
          <DatePickInput {...props} selectedDay={selectedDay} isRangePicker={isRangePicker} />
        )}
        hideOnDayClick={false}
        keepFocus={false}
      />
    </div>
  );
};

export default DatePicker;
