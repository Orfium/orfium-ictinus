/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import dayjs, { Dayjs } from 'dayjs';
import React, { InputHTMLAttributes } from 'react';
import Icon from '../../Icon';
import TextField, { Props as TextFieldProps } from '../../TextField/TextField';
import { DateFormatType } from '../DatePicker';
import { getLocaleFormat } from '../../../utils/helpers';
import { Range } from '../OverlayComponent/OverlayComponent';
import { rangeInputsWrapper } from './DatePickInput.style';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

type Props = {
  handleFocus: () => void;
  handleClear: (event: React.KeyboardEvent) => void;
  isRangePicker: boolean;
  selectedDay: Range;
  /** Props for styling the input */
  inputProps?: TextFieldProps;
  dateFormatOverride?: DateFormatType;
};

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const DatePickInput = React.forwardRef<HTMLInputElement, Props & InputProps>(
  (
    {
      handleFocus,
      handleClear,
      isRangePicker,
      inputProps,
      selectedDay,
      dateFormatOverride = 'MM/DD/YYYY',
    },
    ref
  ) => {
    const formatDate = (date: Dayjs | undefined) => {
      return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
    };

    const getDateFormatted = React.useCallback(formatDate, []);

    return (
      <div css={rangeInputsWrapper()}>
        {isRangePicker ? (
          <TextField
            ref={ref}
            {...inputProps}
            onFocus={handleFocus}
            onKeyDown={handleClear}
            onChange={ON_CHANGE_MOCK}
            placeholder="Date (start) - Date (end)"
            value={
              selectedDay.from &&
              `${getDateFormatted(selectedDay.from)} - ${getDateFormatted(selectedDay.to)}`
            }
            rightIcon={<Icon name={'calendarEmpty'} color={'#676767'} />}
          />
        ) : (
          <TextField
            ref={ref}
            {...inputProps}
            onFocus={handleFocus}
            onKeyDown={handleClear}
            onChange={ON_CHANGE_MOCK}
            placeholder="Select date"
            value={selectedDay.to && getDateFormatted(selectedDay.to)}
            rightIcon={<Icon name={'calendarEmpty'} color={'#676767'} />}
          />
        )}
      </div>
    );
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
