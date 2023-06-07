import { Dayjs } from 'dayjs';
import * as React from 'react';
import { useCallback, useState } from 'react';

import Button from '../../Button';
import { DisabledDates, ExtraOption } from '../DatePicker';
import { currentDay } from '../utils';
import MonthWrapper from './components/MonthWrapper/MonthWrapper';
import {
  buttonsMonthsWrapperStyle,
  buttonsWrapperStyle,
  monthsWrapperStyle,
  optionStyle,
  optionsWrapperStyle,
  overlayWrapperStyle,
} from './OverlayComponent.style';

type Props = {
  selectedOption?: string;
  onCancel?: () => void;
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
const OverlayComponent: React.FC<Props> = ({
  selectedOption,
  setSelectedOption = () => {},
  isRangePicker = false,
  extraOptions = [],
  onDaySelect,
  selectedDays,
  disabledDates,
  onCancel = () => {},
  onApply = () => {},
}) => {
  const [date, setDate] = useState(currentDay);
  const [date2, setDate2] = useState(currentDay);

  const handleArrow = useCallback(
    (direction: 'forward' | 'back' = 'back') => {
      setDate((curDate) => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
      setDate2((curDate) => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
    },
    [date, date2]
  );

  return (
    <div css={overlayWrapperStyle()}>
      {extraOptions.length > 0 && isRangePicker && (
        <div css={optionsWrapperStyle()}>
          {extraOptions.map((option) => (
            <div
              key={option.value}
              css={optionStyle({ selected: selectedOption === option.value })}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <div css={buttonsMonthsWrapperStyle({ isRangePicker })}>
        <div css={monthsWrapperStyle({ isRangePicker })}>
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
              date={date2.month(date2.month() + 1)}
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

        <div css={buttonsWrapperStyle()}>
          <Button filled={false} size={'sm'} onClick={onCancel} type={'primary'}>
            Cancel
          </Button>
          <Button
            size={'sm'}
            onClick={onApply}
            type={'primary'}
            disabled={Boolean(!selectedDays.from || !selectedDays.to)}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OverlayComponent);
