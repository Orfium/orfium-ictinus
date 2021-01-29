/** @jsx jsx */
import { jsx } from '@emotion/core';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';
import omit from 'lodash/omit';
import { DayPickerInputProps } from 'react-day-picker';
import Icon from '../../Icon';
import TextField from '../../TextField';
import { DateFormatType } from '../DatePicker';
import { formFieldStyles } from '../../../theme/palette';
import { getLocaleFormat } from '../../../utils/helpers';
import TextInputWrapper from '../../utils/TextInputWrapper/TextInputWrapper';
import { css } from '@emotion/core';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

type Props = {
  isRangePicker: boolean;
  selectedDay: Dayjs;
  inputLabel: string;
  /** Style of input field */
  styleType: formFieldStyles;
  dateFormatOverride?: DateFormatType;
} & DayPickerInputProps;

const DatePickInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { isRangePicker, styleType, selectedDay, inputLabel, dateFormatOverride = undefined, ...props },
    ref
  ) => {
    const formatDate = (date: Date | undefined) => {
      return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
    };

    const getDateFormatted = React.useCallback(formatDate, []);

    return isRangePicker ? (
      <div
        css={css`
          input {
            width: 78px;
          }
        `}
      >
        <TextInputWrapper styleType={styleType}>
          <TextField
            {...omit(props, ['onBlur', 'onChange', 'onFocus'])}
            onChange={ON_CHANGE_MOCK}
            lean
            placeholder={`${inputLabel} (Start)`}
            value={getDateFormatted(selectedDay.from)}
          />
          <span
            css={css`
              margin-left: -5px;
              color: ${selectedDay.from && selectedDay.to ? '#000000' : '#676767'};
              position: relative;
              z-index: 1;
            `}
          >
            -
          </span>
          <TextField
            {...omit(props, ['onBlur', 'onChange', 'onFocus'])}
            onChange={ON_CHANGE_MOCK}
            rightIcon={<Icon name={'calendarEmpty'} color={'#676767'} />}
            placeholder={`${inputLabel} (End)`}
            lean
            value={getDateFormatted(selectedDay.to)}
          />
        </TextInputWrapper>
      </div>
    ) : (
      <TextField
        onChange={ON_CHANGE_MOCK}
        label={inputLabel}
        {...omit(props, ['onBlur', 'onChange', 'onFocus'])}
        styleType={styleType}
        value={getDateFormatted(selectedDay.from)}
        rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
      />
    );
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
