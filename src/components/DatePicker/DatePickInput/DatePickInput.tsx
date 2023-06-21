import React, { useCallback, InputHTMLAttributes } from 'react';
import dayjs, { Dayjs } from 'utils/date';

import { rangeInputsWrapper } from './DatePickInput.style';
import { generateTestDataId, getLocaleFormat } from '../../../utils/helpers';
import { TestProps } from '../../../utils/types';
import FilterBase from '../../Filter/components/FilterBase';
import { FilterType, StyleType } from '../../Filter/types';
import Icon from '../../Icon';
import TextField, { TextFieldProps } from '../../TextField/TextField';
import { DateFormatType } from '../DatePicker';
import { Range } from '../OverlayComponent/OverlayComponent';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

export type DatePickInputProps = {
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
} & InputProps &
  TestProps;

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const formatDate = (dateFormatOverride: string) => (date: Dayjs | undefined) => {
  return date ? dayjs(date).format(getLocaleFormat(dateFormatOverride)) : '';
};

const getLabels = (isRangePicker: boolean, formattedTo: string) => ({
  selectDate: `Select Date${isRangePicker ? 's' : ''}`,
  to: isRangePicker ? `- ${formattedTo}` : '',
});

const DatePickInput = React.forwardRef<HTMLInputElement, DatePickInputProps>(
  (
    {
      handleFocus,
      filterConfig = {},
      handleClear,
      dataTestId,
      isRangePicker,
      inputProps,
      selectedDay,
      dateFormatOverride = 'MM/DD/YYYY',
      isOpen,
    },
    ref
  ) => {
    const getDateFormatted = useCallback(formatDate(dateFormatOverride), [dateFormatOverride]);

    const formattedFrom = getDateFormatted(selectedDay.from);
    const formattedTo = getDateFormatted(selectedDay.to);

    const labels = getLabels(isRangePicker, formattedTo);

    const { buttonType = 'primary', styleType = 'filled', filterType } = filterConfig;

    const renderBase = () => {
      if (filterType) {
        return (
          <FilterBase
            isDatePicker
            dataTestId={generateTestDataId('filter', dataTestId)}
            isDisabled={false}
            buttonType={buttonType}
            styleType={styleType}
            handleOpen={handleFocus}
            filterType={filterType}
            onClear={handleClear}
            selectedItemLabel={
              selectedDay.from && `${labels.selectDate} : ${formattedFrom} ${labels.to}`
            }
            isOpen={isOpen}
            hasSelectedValue={Boolean(selectedDay.from && `${formattedFrom} - ${formattedTo}`)}
            label={!selectedDay.from ? labels.selectDate : ''}
            iconName={selectedDay.from ? 'calendarFilled' : 'calendarEmpty'}
          />
        );
      }

      if (isRangePicker) {
        return (
          <TextField
            ref={ref}
            {...inputProps}
            onFocus={handleFocus}
            onKeyDown={handleClear}
            dataTestId={dataTestId}
            onChange={ON_CHANGE_MOCK}
            placeholder="Date (start) - Date (end)"
            value={selectedDay.from ? `${formattedFrom} - ${formattedTo}` : ''}
            suffix={<Icon name={'calendarEmpty'} color={'#676767'} />}
          />
        );
      }

      return (
        <TextField
          ref={ref}
          {...inputProps}
          onFocus={handleFocus}
          onKeyDown={handleClear}
          dataTestId={dataTestId}
          onChange={ON_CHANGE_MOCK}
          placeholder="Select date"
          value={selectedDay.to ? formattedFrom : ''}
          suffix={<Icon name={'calendarEmpty'} color={'#676767'} />}
        />
      );
    };

    return <div css={rangeInputsWrapper()}>{renderBase()}</div>;
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
