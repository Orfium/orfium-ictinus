/** @jsx jsx */
import { jsx } from '@emotion/core';
import dayjs from 'dayjs';
import * as React from 'react';
import DayPicker, { DateUtils, DayPickerInputProps, RangeModifier } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import useTheme from '../../hooks/useTheme';
import { datePickerStyles } from './DatePicker.style';
import DatePickInput from './DatePickInput/DatePickInput';
import OverlayComponent from './OverlayComponent/OverlayComponent';

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
  const dayPickerInputRef = React.useRef<DayPickerInput>(null);
  const dayPickerRef = React.useRef<DayPicker>(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedDay, setSelectedDay] = React.useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  React.useEffect(() => {
    if (onChange) {
      onChange(selectedDay);
    }
  }, [onChange, selectedDay]);

  const handleDayRangeClick = React.useCallback(
    day => {
      const aboutToCompleteBothDates = selectedDay.from && !selectedDay.to;
      const range = DateUtils.addDayToRange(
        day,
        // @TODO problem with the library as they define RangeModifiers as not null or undefined when they use it like this
        // @ts-ignore
        aboutToCompleteBothDates ? selectedDay : daysInitialState
      );

      if (aboutToCompleteBothDates) {
        dayPickerInputRef.current?.hideDayPicker();
      }

      setSelectedDay(range);
      setSelectedOption('custom');
    },
    [selectedDay, setSelectedDay, setSelectedOption, dayPickerInputRef, daysInitialState]
  );

  const handleDayClick = React.useCallback(
    day => {
      setSelectedDay({ from: day, to: day });
      setSelectedOption('custom');
      dayPickerInputRef.current?.hideDayPicker();
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
