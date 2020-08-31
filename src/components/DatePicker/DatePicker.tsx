/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useRef, useState } from 'react';
import { datePickerStyles } from './DatePicker.style';
import useTheme from 'hooks/useTheme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils, RangeModifier } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';

import TextField from '../TextField';
import Icon from '../Icon';
import { wrapperStyle } from '../TextField/TextField.style';
import { flex } from '../../theme/functions';
import OverlayComponent from './OverlayComponent/OverlayComponent';

export type Props = {
  disableFutureDates?: boolean;
  isRangePicker?: boolean;
};

export type DateRange =
  | RangeModifier
  | {
      from: undefined;
      to: undefined;
    };

export type ExtraOption = { value: string; label: string; dates: Date | Date[] };

const DatePicker: React.FC<Props> = ({ disableFutureDates = false, isRangePicker = true }) => {
  const theme = useTheme();
  const dayPickerRef = useRef<DayPickerInput>(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDay, setSelectedDay] = useState<DateRange>({ from: undefined, to: undefined });
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
  const getDateFormatted = useCallback(
    (date: Date | undefined) => (date ? dayjs(date).format('MM/DD/YYYY') : ''),
    []
  );

  return (
    <div css={datePickerStyles({ isRangePicker })(theme)}>
      <DayPickerInput
        ref={dayPickerRef}
        overlayComponent={(props: any) => (
          <OverlayComponent
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
            {...props}
          />
        )}
        dayPickerProps={{
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
        }}
        component={(props: any) =>
          isRangePicker ? (
            <div
              css={[
                wrapperStyle({})(theme),
                flex,
                {
                  width: 275,
                },
              ]}
            >
              <TextField
                label="Date (Start)"
                lean={true}
                {...props}
                value={getDateFormatted(selectedDay.from)}
              />
              <TextField
                rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
                label={`Date (End)`}
                {...props}
                lean={true}
                value={getDateFormatted(selectedDay.to)}
              />
            </div>
          ) : (
            <TextField
              label="Date"
              {...props}
              value={getDateFormatted(selectedDay.from)}
              rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
            />
          )
        }
        hideOnDayClick={false}
        keepFocus={false}
      />
    </div>
  );
};

export default DatePicker;
