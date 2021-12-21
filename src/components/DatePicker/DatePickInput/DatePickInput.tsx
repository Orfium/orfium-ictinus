import dayjs, { Dayjs } from 'dayjs';
import React, { InputHTMLAttributes } from 'react';

import useTheme from '../../../hooks/useTheme';
import { getLocaleFormat } from '../../../utils/helpers';
import FilterBase from '../../Filter/components/FilterBase';
import { FilterType, StyleType } from '../../Filter/types';
import Icon from '../../Icon';
import TextField, { Props as TextFieldProps } from '../../TextField/TextField';
import { DateFormatType } from '../DatePicker';
import { Range } from '../OverlayComponent/OverlayComponent';
import { rangeInputsWrapper } from './DatePickInput.style';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

type Props = {
  /** Handles the focus state of the component */
  handleFocus: () => void;
  /** Handles the clear action for the datepicker */
  handleClear: (event?: React.KeyboardEvent) => void;
  /** Defines whether the component selects a single date or a range */
  isRangePicker: boolean;
  /** Style properties for the DatePicker with a filter base */
  filterConfig?: {
    buttonType?: 'primary' | 'secondary';
    styleType?: StyleType;
    filterType?: FilterType;
  };
  /** The selected day */
  selectedDay: Range;
  /** Props for styling the input */
  inputProps?: TextFieldProps;
  /** Overrides the default date format */
  dateFormatOverride?: DateFormatType;
  /** Defines whether the component is open */
  isOpen: boolean;
};

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const DatePickInput = React.forwardRef<HTMLInputElement, Props & InputProps>(
  (
    {
      handleFocus,
      filterConfig,
      handleClear,
      isRangePicker,
      inputProps,
      selectedDay,
      dateFormatOverride = 'MM/DD/YYYY',
      isOpen,
    },
    ref
  ) => {
    const formatDate = (date: Dayjs | undefined) => {
      return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
    };

    const getDateFormatted = React.useCallback(formatDate, []);

    const renderBase = () => {
      if (filterConfig?.filterType) {
        return (
          <FilterBase
            isDatePicker
            dataTestId={'filter'}
            disabled={false}
            buttonType={filterConfig?.buttonType || 'primary'}
            styleType={filterConfig?.styleType || 'filled'}
            handleOpen={handleFocus}
            filterType={filterConfig.filterType}
            onClear={handleClear}
            selectedItemLabel={
              selectedDay.from &&
              `Select Date${isRangePicker ? 's' : ''} : ${getDateFormatted(selectedDay.from)} ${
                isRangePicker ? `- ${getDateFormatted(selectedDay.to)}` : ''
              }`
            }
            open={isOpen}
            hasSelectedValue={Boolean(
              selectedDay.from &&
                `${getDateFormatted(selectedDay.from)} - ${getDateFormatted(selectedDay.to)}`
            )}
            label={!selectedDay.from ? `Select Date${isRangePicker ? 's' : ''}` : ''}
            iconName={selectedDay.from ? 'calendarFilled' : 'calendarEmpty'}
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
    };

    return <div css={rangeInputsWrapper()}>{renderBase()}</div>;
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
