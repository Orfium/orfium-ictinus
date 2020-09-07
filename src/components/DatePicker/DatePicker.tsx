/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import useTheme from 'hooks/useTheme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils, RangeModifier, DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';
import OverlayComponent from './OverlayComponent/OverlayComponent';
import DatePickInput from './DatePickInput/DatePickInput';

export type Props = {
  /** This boolean shows if the date picker will have the future dates available to select. Default: false */
  disableFutureDates?: boolean;
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (date: DateRange) => DateRange;
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
}) => {
  const theme = useTheme();
  const dayPickerRef = useRef<DayPickerInput>(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDay, setSelectedDay] = useState<DateRange>({ from: undefined, to: undefined });

  useEffect(() => {
    if (onChange) {
      onChange(selectedDay);
    }
  }, [onChange, selectedDay]);

  const handleDayRangeClick = useCallback(
    day => {
      const aboutToCompleteBothDates = selectedDay.from && !selectedDay.to;
      const range = DateUtils.addDayToRange(
        day,
        // @TODO problem with the library as they define RangeModifiers as not null or undefined when they use it like this
        // @ts-ignore
        aboutToCompleteBothDates ? selectedDay : daysInitialState
      );

      if (aboutToCompleteBothDates) {
        dayPickerRef.current?.hideDayPicker();
      }

      setSelectedDay(range);
      setSelectedOption('custom');
    },
    [selectedDay, setSelectedDay, setSelectedOption, dayPickerRef.current]
  );

  const handleDayClick = useCallback(
    day => {
      setSelectedDay({ from: day, to: day });
      setSelectedOption('custom');
      dayPickerRef.current?.hideDayPicker();
    },
    [setSelectedDay, setSelectedOption, dayPickerRef.current]
  );

  const handleSelectedOptions = (option: string) => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);
    dayPickerRef.current?.hideDayPicker();

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
    onDayClick: isRangePicker ? handleDayRangeClick : handleDayClick,
    selectedDays: selectedDay as RangeModifier,
    modifiers: isRangePicker ? modifiers : undefined,
    firstDayOfWeek: 1,
    numberOfMonths: isRangePicker ? 2 : 1,
    disabledDays: disableFutureDates
      ? [
          {
            after: new Date(),
          },
        ]
      : undefined,
  };

  return (
    <div css={datePickerStyles({ isRangePicker })(theme)}>
      <DayPickerInput
        ref={dayPickerRef}
        overlayComponent={(props: DayPickerInputProps) => (
          <OverlayComponent
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
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
