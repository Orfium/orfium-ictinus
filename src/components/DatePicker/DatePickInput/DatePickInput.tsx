import dayjs, { Dayjs } from 'dayjs';
import React, { InputHTMLAttributes } from 'react';

import useTheme from '../../../hooks/useTheme';
import { getLocaleFormat } from '../../../utils/helpers';
import FilterBase from '../../Filter/components/FilterBase';
import { FilterType } from '../../Filter/types';
import Icon from '../../Icon';
import TextField, { Props as TextFieldProps } from '../../TextField/TextField';
import { DateFormatType } from '../DatePicker';
import { Range } from '../OverlayComponent/OverlayComponent';
import { rangeInputsWrapper } from './DatePickInput.style';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

type Props = {
  handleFocus: () => void;
  handleClear: (event?: React.KeyboardEvent) => void;
  filterType?: FilterType;
  isRangePicker: boolean;
  selectedDay: Range;
  /** Props for styling the input */
  inputProps?: TextFieldProps;
  dateFormatOverride?: DateFormatType;
  open: boolean;
};

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const DatePickInput = React.forwardRef<HTMLInputElement, Props & InputProps>(
  (
    {
      handleFocus,
      handleClear,
      isRangePicker,
      filterType,
      inputProps,
      selectedDay,
      dateFormatOverride = 'MM/DD/YYYY',
      open,
    },
    ref
  ) => {
    const theme = useTheme();
    const formatDate = (date: Dayjs | undefined) => {
      return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
    };

    const getDateFormatted = React.useCallback(formatDate, []);

    const renderBase = React.useMemo(() => {
      if (filterType) {
        return (
          <FilterBase
            isDatePicker
            dataTestId={'filter'}
            disabled={false}
            handleOpen={handleFocus}
            filterType={filterType}
            onClear={handleClear}
            selectedItemLabel={
              selectedDay.from &&
              `Select Date${isRangePicker ? 's' : ''} : ${getDateFormatted(selectedDay.from)} ${
                isRangePicker ? `- ${getDateFormatted(selectedDay.to)}` : ''
              }`
            }
            open={open}
            hasSelectedValue={Boolean(
              selectedDay.from &&
                `${getDateFormatted(selectedDay.from)} - ${getDateFormatted(selectedDay.to)}`
            )}
            label={!selectedDay.from ? `Select Date${isRangePicker ? 's' : ''}` : ''}
            iconName={'calendarEmpty'}
            iconSize={19}
            iconColor={theme.utils.getColor('darkGrey', 850)}
            styleType={'filled'}
          />
        );
      }

      return isRangePicker ? (
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
      );
    }, [
      getDateFormatted,
      handleClear,
      handleFocus,
      inputProps,
      filterType,
      isRangePicker,
      open,
      ref,
      selectedDay.from,
      selectedDay.to,
      theme.utils,
    ]);

    return <div css={rangeInputsWrapper()}>{renderBase}</div>;
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
