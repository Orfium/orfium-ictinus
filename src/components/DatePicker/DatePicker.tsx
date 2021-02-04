/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';
import DayPicker, { DateUtils, DayPickerInputProps, RangeModifier } from 'react-day-picker';
import DatePickInput from './DatePickInput/DatePickInput';
import OverlayComponent from './OverlayComponent/OverlayComponent';
import { Modifier } from 'react-day-picker/types/Modifiers';
import { formFieldStyles } from '../../theme/palette';

export type Props = {
  /** This boolean shows if the date picker will have the future dates available to select. Default: false */
  disableFutureDates?: boolean;
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (date: DateRange) => void;
  /** Option to disable some dates */
  disableDates?: Modifier[];
  /** Value to define if needed an initial state or to handle it externally */
  value?: RangeModifier;
  /** The label that the input will use to show it. Default: Date */
  inputLabel?: string;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** The format of the date displayed in the input field */
  dateFormatOverride?: DateFormatType;
};

export type DateRange =
  | RangeModifier
  | {
      from: undefined;
      to: undefined;
    };

export type ExtraOption = { value: string; label: string; dates: Date | Date[] };

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

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

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
  const dayPickerRef = useRef<DayPicker>(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<DateRange>(value);

  useEffect(() => {
    if (value.from && value.to) {
      setSelectedDay(value);
    }
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedDay);
    }
  }, [selectedDay, onChange]);

  const handleCalendarValueChange = useCallback(
    (range, hideDatePicker = false) => {
      setSelectedDay(range);
      setSelectedOption('custom');

      if (hideDatePicker) {
        dayPickerInputRef.current?.hideDayPicker();
      }
    },
    [onChange, setSelectedDay]
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
    [handleCalendarValueChange, selectedDay, daysInitialState]
  );

  const handleDayClick = useCallback(
    (day, { disabled }) => {
      if (disabled) {
        return;
      }
      const newValue = { from: day, to: day };
      handleCalendarValueChange(newValue, true);
    },
    [handleCalendarValueChange]
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
    <div css={datePickerStyles({ isRangePicker })}>
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
        component={React.forwardRef<HTMLInputElement, any>(
          (props: DayPickerInputProps & InputProps, ref) => (
            <DatePickInput
              {...props}
              ref={ref}
              styleType={styleType}
              inputLabel={inputLabel}
              selectedDay={selectedDay}
              isRangePicker={isRangePicker}
              dateFormatOverride={dateFormatOverride}
            />
          )
        )}
        hideOnDayClick={false}
        keepFocus={false}
      />
    </div>
  );
};

export default DatePicker;
