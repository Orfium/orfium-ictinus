import { PositionInScreen } from 'components/utils/PositionInScreen';
import useKeyboardEvents from 'hooks/useKeyboardEvents';
import React, { memo, useCallback, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import type { Dayjs } from 'utils/date';
import type { TestProps } from 'utils/types';
import { EMPTY_STATE } from './constants';
import { datePickerStyles } from './DatePicker.style';
import type { DatePickerProps } from './DatePicker.types';
import DatePickInput from './DatePickInput';
import type { Range } from './OverlayComponent/OverlayComponent';
import OverlayComponent from './OverlayComponent/OverlayComponent';
import { initDates } from './utils';

const DatePicker: React.FC<DatePickerProps & TestProps> = ({
  isRangePicker = false,
  onChange = () => {},
  onClear = () => {},
  disableDates,
  value: initialValue,
  inputProps,
  dateFormatOverride = undefined,
  isClearable = false,
  filterConfig,
  options,
  dataTestId,
  placement,
}) => {
  const value = useMemo(() => initDates(initialValue || {}), [initialValue]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [range, setRange] = useState<Range>(value);

  const { keyboardProps } = useKeyboardEvents({
    events: {
      keydown: {
        onEscape: () => {
          setIsOpen(false);
        },
      },
    },
    hasPropagation: true,
  });

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

  const clearSelectedOption = useCallback(() => {
    if (selectedOption.length) {
      setSelectedOption('');
    }
  }, [selectedOption]);

  const setRangePick = useCallback(
    (day: Dayjs) => {
      const startOfDay = day.startOf('day');
      const endOfDay = day.endOf('day');
      // in case is a day picker
      if (!isRangePicker) {
        return setRange((oldState) => {
          if (oldState.from && oldState.to && day.isBetween(oldState.from, oldState.to)) {
            return EMPTY_STATE;
          }

          return { from: startOfDay, to: endOfDay };
        });
      }

      // in case is range picker
      return setRange((oldState) => {
        if (oldState.from && oldState.to) {
          // Reset range and set new start date
          return { from: startOfDay, to: undefined };
        }

        if (!oldState.from) {
          // First selection - set start date
          return { ...oldState, from: startOfDay };
        }

        // Second selection - determine correct order of dates
        if (startOfDay.isBefore(oldState.from)) {
          // If selected date is before the start date, swap them
          return { from: startOfDay, to: oldState.from.endOf('day') };
        }

        // Normal case - selected date is after start date
        return { ...oldState, to: endOfDay };
      });
    },
    [isRangePicker]
  );

  const onClearAll = useCallback(() => {
    setRange(EMPTY_STATE);
    onChange(EMPTY_STATE);
    clearSelectedOption();
    setIsOpen(false);
  }, [onChange, clearSelectedOption]);

  const handleIconClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClear = useCallback(
    (e?: React.KeyboardEvent) => {
      if (!isClearable && !filterConfig.filterType) {
        return false;
      }

      if (filterConfig?.filterType) {
        setIsOpen(false);
        setRange(EMPTY_STATE);
        clearSelectedOption();

        if (filterConfig?.filterType === 'added') {
          return onClear();
        }

        return onChange(EMPTY_STATE);
      }

      if (e?.keyCode === 27) {
        // if escape
        return setIsOpen(false);
      }

      if (e?.keyCode === 8) {
        //backspace
        if (isRangePicker) {
          if (value.from && value.to) {
            setRange({ from: value.from, to: undefined });

            /** Since we are clearing the "to" value, predefined option is not valid anymore */
            clearSelectedOption();

            return onChange({ from: value.from.toDate(), to: undefined });
          }
        }

        setRange(EMPTY_STATE);
        onChange(EMPTY_STATE);
      }
    },
    [
      isClearable,
      filterConfig?.filterType,
      clearSelectedOption,
      onChange,
      onClear,
      isRangePicker,
      value.from,
      value.to,
    ]
  );

  const onApply = useCallback(() => {
    applyRangeAndClose(range);
  }, [applyRangeAndClose, range]);

  return (
    <div {...keyboardProps}>
      <PositionInScreen
        isVisible={isOpen}
        setIsVisible={setIsOpen}
        placement={placement}
        offsetY={8}
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
            onClearAll={onClearAll}
            onApply={onApply}
          />
        </div>
      </PositionInScreen>
    </div>
  );
};

export default memo(DatePicker, isEqual);
