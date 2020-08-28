// @ts-nocheck
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useRef, useState } from 'react';
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
  extraOptions = [],
  children,
  ...props
}) {
  const theme = useTheme();

  return (
    <div className={classNames.overlayWrapper} style={{ marginTop: 3 }} {...props}>
      <div className={classNames.overlay}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
          {children}
        </div>
      </div>
    </div>
  );
}

const DatePicker: React.FC<Props> = ({ disableFutureDates = false }) => {
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

  const handleDayClick = day => {
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
  };

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
    <div css={datePickerStyles()(theme)}>
      <DayPickerInput
        ref={dayPickerRef}
        overlayComponent={props => (
          <CustomOverlay
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            {...props}
          />
        )}
        dayPickerProps={{
          onDayClick: handleDayClick,
          selectedDays: selectedDay,
          modifiers,
          // modifiersStyles: {
          //   thursdays: {
          //     color: '#ffc107',
          //     backgroundColor: '#fffdee',
          //   },
          // },
          firstDayOfWeek: 1,
          numberOfMonths: 2,
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
        component={props => (
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
        )}
        hideOnDayClick={false}
        keepFocus={false}
      />
    </div>
  );
};

export default DatePicker;
