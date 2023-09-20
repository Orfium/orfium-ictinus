import { Dayjs } from 'dayjs';
import React, { useCallback, memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';

import { datePickerStyles } from './DatePicker.style';
import DatePickInput from './DatePickInput';
import OverlayComponent, { Range } from './OverlayComponent/OverlayComponent';
import { currentDay, initDates } from './utils';
import { TestProps } from '../../utils/types';
import { FilterType, StyleType } from '../Filter/types';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import PositionInScreen from '../utils/PositionInScreen';

export type DisabledDates = {
  daysOfWeek?: number[];
  days?: Date[];
  after?: Date;
  before?: Date;
};

export type DateRange = { from: Date | undefined; to: Date | undefined };

export type Props = {
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (range: DateRange) => void;
  /** Option to disable some dates */
  disableDates?: DisabledDates;
  /** Value to define if needed an initial state or to handle it externally */
  value: DateRange;
  /** Props of the TextField input */
  inputProps?: TextFieldProps;
  /** The format of the date displayed in the input field */
  dateFormatOverride?: DateFormatType;
  /** if the datepicker can be clear with backspace */
  isClearable?: boolean;
  /** if the datepicker's default date is today instead of placeholder text */
  /** @deprecated This prop is being deprecated and is not used as you can manipulate date from value, will be removed in the future **/
  isDefaultNow?: boolean;
  /** Style properties for the DatePicker with a filter base */
  filterConfig?: {
    /** The type of the filter button's palette - defaults to "primary" */
    buttonType?: 'primary' | 'secondary';
    /** Defines the style type of the filter button */
    styleType?: StyleType;
    /** This property defines the Filter's type */
    filterType?: FilterType;
  };
};

export type ExtraOption = { value: string; label: string; dates: Dayjs[] };

export type DateFormatType =
  | 'MM/DD/YYYY'
  | 'DD/MM/YYYY'
  | 'MMMM D, YYYY'
  | 'dddd, MMMM D, YYYY'
  | 'M/D/YYYY'
  | 'MMM D, YYYY'
  | 'ddd, MMM D, YYYY'
  | 'DD MMM YYYY';

export const extraOptions: ExtraOption[] = [
  {
    value: 'last-7-days',
    label: 'Last 7 days',
    dates: [currentDay.subtract(7, 'day'), currentDay],
  },
  {
    value: 'last-30-days',
    label: 'Last 30 days',
    dates: [currentDay.subtract(30, 'day'), currentDay],
  },
  {
    value: 'custom',
    label: 'Custom',
    dates: [currentDay],
  },
];

const DatePicker: React.FC<Props & TestProps> = ({
  isRangePicker = false,
  onChange = () => {},
  disableDates,
  value: initialValue,
  inputProps,
  dateFormatOverride = undefined,
  isClearable = false,
  filterConfig,
  dataTestId,
}) => {
  const value = useMemo(() => initDates(initialValue || {}), [initialValue]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>(value);

  const handleSelectedOptions = useCallback((option: string) => {
    const foundOption = extraOptions.find((optionItem) => optionItem.value === option);

    if (foundOption) {
      setRange(
        Array.isArray(foundOption.dates)
          ? { from: foundOption.dates[0], to: foundOption.dates[1] }
          : { from: foundOption.dates, to: foundOption.dates }
      );
    }

    setSelectedOption(option);
  }, []);

  const applyRangeAndClose = useCallback(
    (oldState: Range) => {
      const startDate =
        oldState.to && oldState.from?.isAfter(oldState.to) ? oldState.to : oldState.from;
      const endDate =
        oldState.to && oldState.from?.isAfter(oldState.to) ? oldState.from : oldState.to;
      const newRange = { from: startDate, to: endDate };

      if (newRange.to) {
        setIsOpen(false);
      }

      onChange({ from: newRange.from?.toDate(), to: newRange.to?.toDate() });
    },
    [onChange]
  );

  const setRangePick = useCallback(
    (day: Dayjs) => {
      const startOfDay = day.startOf('day');
      const endOfDay = day.endOf('day');
      // in case is a day picker
      if (!isRangePicker) {
        return setRange((oldState) => {
          if (oldState.from && oldState.to && day.isBetween(oldState.from, oldState.to)) {
            return { from: undefined, to: undefined };
          }

          return { from: startOfDay, to: endOfDay };
        });
      }

      // in case is range picker
      return setRange((oldState) => {
        if (oldState.from && oldState.to) {
          return { from: startOfDay, to: undefined };
        }

        if (!oldState.from) {
          return { ...oldState, from: startOfDay };
        }

        return { ...oldState, to: endOfDay };
      });
    },
    [isRangePicker]
  );

  const onCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClear = useCallback(
    (e?: React.KeyboardEvent) => {
      if (!isClearable && filterConfig?.filterType !== 'added') {
        return;
      }

      if (filterConfig?.filterType) {
        setIsOpen(false);

        return onChange({ to: undefined, from: undefined });
      }

      if (e?.keyCode === 27) {
        // if escape
        setIsOpen(false);

        return;
      }

      if (e?.keyCode === 8) {
        //backspace
        if (isRangePicker) {
          if (value.from && value.to) {
            setRange({ from: value.from, to: undefined });

            return onChange({ from: value.from.toDate(), to: undefined });
          }
        }

        setRange({ from: undefined, to: undefined });
        onChange({ to: undefined, from: undefined });
      }
    },
    [isClearable, filterConfig?.filterType, onChange, value, isRangePicker]
  );

  const onApply = useCallback(() => {
    applyRangeAndClose(range);
  }, [applyRangeAndClose, range]);

  return (
    <ClickAwayListener onClick={onCancel}>
      <PositionInScreen
        visible={isOpen}
        parent={
          <DatePickInput
            filterConfig={filterConfig}
            isRangePicker={isRangePicker}
            selectedDay={value}
            inputProps={inputProps}
            dateFormatOverride={dateFormatOverride}
            handleFocus={handleFocus}
            handleClear={handleClear}
            isOpen={isOpen}
            dataTestId={dataTestId}
          />
        }
      >
        <div css={datePickerStyles()}>
          <OverlayComponent
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOptions}
            extraOptions={extraOptions}
            isRangePicker={isRangePicker}
            onDaySelect={setRangePick}
            selectedDays={range}
            disabledDates={disableDates}
            onCancel={onCancel}
            onApply={onApply}
          />
        </div>
      </PositionInScreen>
    </ClickAwayListener>
  );
};

export default memo(DatePicker, isEqual);
