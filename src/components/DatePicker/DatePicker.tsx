// @ts-nocheck
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useRef, useState } from 'react';
import { optionStyle, datePickerStyles } from './DatePicker.style';
import useTheme from 'hooks/useTheme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';

import TextField from '../TextField';
import Icon from '../Icon';
import { wrapperStyle } from '../TextField/TextField.style';
import { flex } from '../../theme/functions';

export type Props = {
  disableFutureDates?: boolean;
};

function CustomOverlay({
  classNames,
  selectedDay,
  selectedOption,
  setSelectedOption,
  isRangePicker,
  extraOptions = [],
  children,
  ...props
}) {
  const theme = useTheme();

  return (
    <div className={classNames.overlayWrapper} style={{ marginTop: 3 }} {...props}>
      <div className={classNames.overlay}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {isRangePicker && (
            <div css={{ borderRight: '1px solid #dfdfdf' }}>
              {extraOptions.map(option => (
                <div
                  key={option.value}
                  css={optionStyle({ selected: selectedOption === option.value })(theme)}
                  onClick={() => setSelectedOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

const DatePicker: React.FC<Props> = ({ disableFutureDates = false, isRangePicker = true }) => {
  const theme = useTheme();
  const dayPickerRef = useRef(null);
  const daysInitialState = { from: undefined, to: undefined };
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDay, setSelectedDay] = useState({ from: undefined, to: undefined });
  const extraOptions = [
    {
      value: 'last-7-days',
      label: 'Last 7 days',
      dates: [
        dayjs()
          .subtract(7, 'days')
          .toDate(),
        dayjs().toDate(),
      ],
    },
    {
      value: 'last-30-days',
      label: 'Last 30 days',
      dates: [
        dayjs()
          .subtract(30, 'days')
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
        aboutToCompleteBothDates ? selectedDay : daysInitialState
      );

      if (aboutToCompleteBothDates) {
        dayPickerRef.current.hideDayPicker();
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
      dayPickerRef.current.hideDayPicker();
    },
    [setSelectedDay, setSelectedOption, dayPickerRef.current]
  );

  const handleSelectedOptions = option => {
    const foundOption = extraOptions.find(optionItem => optionItem.value === option);
    dayPickerRef.current.hideDayPicker();
    setSelectedDay(
      Array.isArray(foundOption.dates)
        ? { from: foundOption.dates[0], to: foundOption.dates[1] }
        : { from: foundOption.dates, to: foundOption.dates }
    );
    setSelectedOption(option);
  };

  const modifiers = { start: selectedDay.from, end: selectedDay.to };
  const getDateFormatted = date => (date ? dayjs(date).format('MM/DD/YYYY') : '');

  return (
    <div css={datePickerStyles({ isRangePicker })(theme)}>
      <DayPickerInput
        ref={dayPickerRef}
        overlayComponent={props => (
          <CustomOverlay
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
            {...props}
          />
        )}
        dayPickerProps={{
          onDayClick: isRangePicker ? handleDayRangeClick : handleDayClick,
          selectedDays: selectedDay,
          modifiers: isRangePicker ? modifiers : undefined,
          // modifiersStyles: {
          //   thursdays: {
          //     color: '#ffc107',
          //     backgroundColor: '#fffdee',
          //   },
          // },
          firstDayOfWeek: 1,
          numberOfMonths: isRangePicker ? 2 : 1,
          disabledDays: [
            disableFutureDates && {
              after: new Date(),
            },
          ],
        }}
        // value={
        //   selectedDay.from
        //     ? `${selectedDay.from?.toLocaleDateString()}  ${
        //         selectedDay.to ? selectedDay.to.toLocaleDateString() : ''
        //       }`
        //     : ''
        // }
        component={props =>
          isRangePicker ? (
            <div
              css={[
                wrapperStyle({ label: true })(theme),
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
