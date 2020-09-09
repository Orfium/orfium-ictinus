/** @jsx jsx */
import { jsx } from '@emotion/core';
import dayjs from 'dayjs';
import * as React from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import useTheme from '../../../hooks/useTheme';
import { flex } from '../../../theme/functions';
import Icon from '../../Icon';
import TextField from '../../TextField';
import { wrapperStyle } from '../../TextField/TextField.style';
import { DateRange } from '../DatePicker';

type Props = {
  isRangePicker: boolean;
  selectedDay: DateRange;
} & DayPickerInputProps;

const DatePickInput: React.FC<Props> = ({ isRangePicker, selectedDay, ...props }) => {
  const theme = useTheme();
  const getDateFormatted = React.useCallback(
    (date: Date | undefined) => (date ? dayjs(date).format('MM/DD/YYYY') : ''),
    []
  );

  return isRangePicker ? (
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
  );
};

export default DatePickInput;
