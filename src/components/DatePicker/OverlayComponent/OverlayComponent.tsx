import * as React from 'react';
import { useCallback, useState } from 'react';
import type { Dayjs } from 'utils/date';

import MonthWrapper from './components/MonthWrapper/MonthWrapper';
import {
  buttonsMonthsWrapperStyle,
  buttonsWrapperStyle,
  monthsWrapperStyle,
  optionStyle,
  optionsWrapperStyle,
  overlayWrapperStyle,
} from './OverlayComponent.style';
import { getRightCalendarDate, getLeftCalendarDate } from './utils';
import Button from '../../Button';
import { APPLY, CLEAR_ALL } from '../constants';
import type { DisabledDates, ExtraOption } from '../DatePicker.types';

export type OverlayComponentProps = {
  selectedOption?: string;
  onClearAll?: () => void;
  onApply?: () => void;
  setSelectedOption?: (x: string) => void;
  isRangePicker?: boolean;
  extraOptions?: ExtraOption[];
  selectedDays: Range;
  onDaySelect: (date: Dayjs) => void;
  disabledDates?: DisabledDates;
};

export type Range = {
  from?: Dayjs;
  to?: Dayjs;
};
const OverlayComponent: React.FCC<OverlayComponentProps> = ({
  selectedOption,
  setSelectedOption = () => {},
  isRangePicker = false,
  extraOptions = [],
  onDaySelect,
  selectedDays,
  disabledDates,
  onClearAll = () => {},
  onApply = () => {},
}) => {
  const [date, setDate] = useState(getLeftCalendarDate(selectedDays));
  const [date2, setDate2] = useState(getRightCalendarDate(selectedDays));

  const handleArrow = useCallback(
    (direction: 'forward' | 'back' = 'back') => {
      setDate((curDate) => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
      setDate2((curDate) => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
    },
    [date, date2]
  );

  return (
    <div css={overlayWrapperStyle()}>
      <div css={buttonsMonthsWrapperStyle()} data-testid="buttonMonthsWrapperStyle">
        <div css={{ display: 'flex' }}>
          {extraOptions.length > 0 && isRangePicker && (
            <div css={optionsWrapperStyle()} data-testid="optionsWrapperStyle">
              {extraOptions.map((option) => (
                <div
                  key={option.value}
                  css={optionStyle({ isSelected: selectedOption === option.value })}
                  onClick={() => setSelectedOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <div css={monthsWrapperStyle()}>
            <MonthWrapper
              date={date}
              onDaySelect={onDaySelect}
              selectedDays={selectedDays}
              setDate={setDate}
              handleArrow={handleArrow}
              showedArrows={isRangePicker ? 'left' : 'both'}
              disabledDates={disabledDates}
              isRangePicker={isRangePicker}
            />

            {isRangePicker && (
              <MonthWrapper
                date={date2}
                onDaySelect={onDaySelect}
                selectedDays={selectedDays}
                setDate={setDate2}
                handleArrow={handleArrow}
                showedArrows={isRangePicker ? 'right' : 'both'}
                disabledDates={disabledDates}
                isRangePicker={isRangePicker}
              />
            )}
          </div>
        </div>

        <div css={buttonsWrapperStyle()}>
          <Button onClick={onClearAll} dataTestId={'cancel'} type="tertiary">
            {CLEAR_ALL}
          </Button>
          <Button
            onClick={onApply}
            dataTestId={'apply'}
            isDisabled={Boolean(!selectedDays.from || !selectedDays.to)}
          >
            {APPLY}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OverlayComponent);
