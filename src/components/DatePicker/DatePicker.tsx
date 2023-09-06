import React, { useCallback, memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Dayjs } from 'utils/date';

import { datePickerStyles } from './DatePicker.style';
import { DatePickerProps } from './DatePicker.types';
import DatePickInput from './DatePickInput';
import OverlayComponent, { Range } from './OverlayComponent/OverlayComponent';
import { initDates } from './utils';
import { TestProps } from '../../utils/types';
import ClickAwayListener from '../utils/ClickAwayListener';
import PositionInScreen from '../utils/PositionInScreen';

const DatePicker: React.FC<DatePickerProps & TestProps> = ({
  isRangePicker = false,
  onChange = () => {},
  disableDates,
  value: initialValue,
  inputProps,
  dateFormatOverride = undefined,
  isClearable = false,
  filterConfig,
  options,
  dataTestId,
}) => {
  const value = useMemo(() => initDates(initialValue || {}), [initialValue]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>(value);

  const handleSelectedOptions = useCallback(
    (option: string) => {
      const foundOption = options?.find((optionItem) => optionItem.value === option);

      if (foundOption) {
        setRange(
          Array.isArray(foundOption.dates)
            ? { from: foundOption.dates[0], to: foundOption.dates[1] }
            : { from: foundOption.dates, to: foundOption.dates }
        );

        setSelectedOption(option);
      }
    },
    [options]
  );

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

  const handleIconClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClear = useCallback(
    (e?) => {
      if (!isClearable && filterConfig?.filterType !== 'added') {
        return false;
      }

      if (filterConfig?.filterType) {
        setIsOpen(false);

        return onChange({ to: undefined, from: undefined });
      }

      if (e.keyCode === 27) {
        // if escape
        return setIsOpen(false);
      }

      if (e.keyCode === 8) {
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
        isVisible={isOpen}
        parent={
          <DatePickInput
            filterConfig={filterConfig}
            isRangePicker={isRangePicker}
            selectedDay={value}
            inputProps={inputProps}
            dateFormatOverride={dateFormatOverride}
            handleIconClick={handleIconClick}
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
            extraOptions={options}
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
