/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../Button';
import { DisabledDates, ExtraOption } from '../DatePicker';
import dayjs, { Dayjs } from 'dayjs';
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
  selectedOption: string;
  setSelectedOption: (x: string) => void;
  isRangePicker: boolean;
  extraOptions: ExtraOption[];
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
  setSelectedOption,
  isRangePicker,
  extraOptions = [],
  onDaySelect,
  selectedDays,
  disabledDates,
}) => {
  const [date, setDate] = useState(dayjs());
  const [date2, setDate2] = useState(dayjs());

  useEffect(() => {
    if (selectedDays.from && selectedDays.to) {
      setDate(selectedDays.from);
      setDate2(selectedDays.from);
    }
  }, [selectedDays]);

  const handleArrow = useCallback(
    (direction: 'forward' | 'back' = 'back') => {
      setDate(curDate => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
      setDate2(curDate => curDate.month(curDate.month() + (direction === 'forward' ? 1 : -1)));
    },
    [date, date2]
  );

  return (
    <div css={overlayWrapperStyle()}>
      {isRangePicker && (
        <div css={optionsWrapperStyle()}>
          {extraOptions.map(option => (
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
      <div css={buttonsMonthsWrapperStyle()}>
        <div css={monthsWrapperStyle()}>
          <MonthWrapper
            date={date}
            onDaySelect={onDaySelect}
            selectedDays={selectedDays}
            setDate={setDate}
            handleArrow={handleArrow}
            showedArrows={isRangePicker ? 'left' : 'both'}
            disabledDates={disabledDates}
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
            />
          )}
        </div>

        <div css={buttonsWrapperStyle()}>
          <Button filled={false} size={'sm'} onClick={() => {}} type={'branded1'}>
            Cancel
          </Button>
          <Button
            size={'sm'}
            onClick={() => {}}
            type={'branded1'}
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
