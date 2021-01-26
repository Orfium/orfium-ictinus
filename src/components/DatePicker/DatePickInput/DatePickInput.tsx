import dayjs from 'dayjs';
import * as React from 'react';
import omit from 'lodash/omit';
import { DayPickerInputProps } from 'react-day-picker';
import useTheme from '../../../hooks/useTheme';
import { flex } from '../../../theme/functions';
import Icon from '../../Icon';
import TextField from '../../TextField';
import { wrapperStyle } from '../../TextField/TextField.style';
import { DateFormatType, DateRange } from '../DatePicker';
import { formFieldStyles } from '../../../theme/palette';
import { getLocaleFormat } from '../../../utils/helpers';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

type Props = {
  isRangePicker: boolean;
  selectedDay: DateRange;
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
    const theme = useTheme();
    const formatDate = (date: Date | undefined) => {
      return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
    };

    const getDateFormatted = React.useCallback(formatDate, []);

    return isRangePicker ? (
      <div
        ref={ref}
        css={[
          wrapperStyle({ styleType })(theme),
          flex,
          {
            width: 275,
          },
        ]}
      >
        <TextField
          onChange={ON_CHANGE_MOCK}
          label={`${inputLabel} (Start)`}
          lean={true}
          {...omit(props, ['onBlur', 'onChange', 'onFocus'])}
          value={getDateFormatted(selectedDay.from)}
        />
        <TextField
          onChange={ON_CHANGE_MOCK}
          rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
          label={`${inputLabel} (End)`}
          {...omit(props, ['onBlur', 'onChange', 'onFocus'])}
          lean={true}
          value={getDateFormatted(selectedDay.to)}
        />
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
