import useTheme from 'hooks/useTheme';
import React, { useCallback, InputHTMLAttributes, useMemo } from 'react';
import { rem } from 'theme/utils';
import dayjs, { Dayjs } from 'utils/date';

import { iconStyles } from './DatePickInput.style';
import { generateTestDataId, getLocaleFormat } from '../../../utils/helpers';
import { TestProps } from '../../../utils/types';
import FilterBase from '../../Filter/components/FilterBase';
import { FilterType, StyleType } from '../../Filter/types';
import TextField, { TextFieldProps } from '../../TextField/TextField';
import { DATE_PICKER_LABEL, DATE_RANGE_PICKER_LABEL } from '../constants';
import { DateFormatType } from '../DatePicker.types';
import { Range } from '../OverlayComponent/OverlayComponent';
import Icon from 'components/Icon';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

// TODO: Need to fix this (TextField onChange prop)
const ON_CHANGE_MOCK = () => {};

export type DatePickInputProps = {
  /** Callback for the calendar icon button of the input field */
  handleIconClick: () => void;
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
      handleIconClick,
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
    const theme = useTheme();

    const tokens = getTextInputBaseTokens(theme);

    const getDateFormatted = useCallback(formatDate(dateFormatOverride), [dateFormatOverride]);

    const formattedFrom = getDateFormatted(selectedDay.from);
    const formattedTo = getDateFormatted(selectedDay.to);

    const labels = getLabels(isRangePicker, formattedTo);

    const { buttonType = 'primary', styleType = 'filled', filterType } = filterConfig;

    const sx = {
      wrapper: {
        minWidth: isRangePicker
          ? rem(tokens('minWidth.extraLarge.normal'))
          : rem(tokens('minWidth.medium.normal')),
      },
    };

    const renderIconButton = useMemo(
      () => (
        <div
          tabIndex={0}
          css={iconStyles()}
          onClick={handleIconClick}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              handleIconClick();
            }
          }}
          data-testid="calendar_button"
        >
          {/** @TODO: Replace this with Interactive Icon once is implemented */}
          <Icon name="calendarEmpty" size={20} color={tokens('addOn.iconColor')} />
        </div>
      ),
      [handleIconClick, tokens]
    );

    const getLabel = useMemo(() => {
      if (inputProps?.label.length) {
        return inputProps.label;
      }

      return isRangePicker ? DATE_RANGE_PICKER_LABEL : DATE_PICKER_LABEL;
    }, [inputProps?.label, isRangePicker]);

    const renderBase = () => {
      if (filterType) {
        return (
          <FilterBase
            isDatePicker
            dataTestId={generateTestDataId('filter', dataTestId)}
            isDisabled={false}
            buttonType={buttonType}
            styleType={styleType}
            handleOpen={handleIconClick}
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
            label={getLabel}
            onKeyDown={handleClear}
            dataTestId={dataTestId}
            onChange={ON_CHANGE_MOCK}
            value={selectedDay.from ? `${formattedFrom} - ${formattedTo}` : ''}
            suffix={renderIconButton}
            sx={sx}
          />
        );
      }

      return (
        <TextField
          ref={ref}
          {...inputProps}
          label={getLabel}
          onKeyDown={handleClear}
          dataTestId={dataTestId}
          onChange={ON_CHANGE_MOCK}
          value={selectedDay.to ? formattedFrom : ''}
          suffix={renderIconButton}
          sx={sx}
        />
      );
    };

    return <div>{renderBase()}</div>;
  }
);

DatePickInput.displayName = 'DatePickInput';

export default DatePickInput;
