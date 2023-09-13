import { range } from 'lodash';
import React, { useMemo, useState } from 'react';
import { Dayjs } from 'utils/date';

import {
  monthHeaderNavigationIconWrapperStyle,
  monthHeaderTitleStyle,
  monthHeaderTitleWrapperStyle,
  monthHeaderWrapperStyle,
  monthWrapperStyle,
} from './MonthWrapper.style';
import { DisabledDates } from '../../../DatePicker.types';
import Month from '../../../Month/Month';
import { Range } from '../../OverlayComponent';
import Button from 'components/Button';
import IconButton from 'components/IconButton/IconButton';
import { SelectOption } from 'components/Select';
import SelectMenu from 'components/Select/components/SelectMenu';
import ClickAwayListener from 'components/utils/ClickAwayListener';

type MonthWrapperProps = {
  showedArrows?: 'left' | 'right' | 'both';
  isRangePicker?: boolean;
  date: Dayjs;
  selectedDays: Range;
  onDaySelect?: (date: Dayjs) => void;
  handleArrow?: (p: 'forward' | 'back') => void;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  disabledDates?: DisabledDates;
};

function generateArrayOfYears(date: Dayjs): SelectOption[] {
  const span = 10;
  const max = new Date().getFullYear() + span;
  const min = new Date().getFullYear() - span;
  const years = range(min, max);

  return years.map((year) => ({
    value: year.toString(),
    label: `${date.format('MMMM')} ${year.toString()}`,
  }));
}

const MonthWrapper = ({
  setDate,
  onDaySelect = () => {},
  selectedDays,
  date,
  handleArrow = () => {},
  showedArrows = 'both',
  disabledDates,
  isRangePicker = false,
}: MonthWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const years = useMemo(() => generateArrayOfYears(date), [date]);

  return (
    <React.Fragment>
      <div css={monthWrapperStyle()}>
        <div css={monthHeaderWrapperStyle()}>
          {(showedArrows === 'left' || showedArrows === 'both') && (
            <div css={monthHeaderNavigationIconWrapperStyle({ position: 'left' })}>
              <IconButton
                name={'triangleLeft'}
                type="tertiary"
                onClick={() => handleArrow('back')}
                dataTestId="month_back"
              />
            </div>
          )}

          <ClickAwayListener
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div css={monthHeaderTitleWrapperStyle()}>
              <div css={monthHeaderTitleStyle({ isRangePicker })}>
                <Button
                  onClick={!isRangePicker ? () => setIsOpen(!isOpen) : undefined}
                  type="tertiary"
                  dataTestId={`${showedArrows !== 'both' ? showedArrows + '_' : ''}month`}
                >
                  {date.format('MMMM')} {date.format('YYYY')}
                </Button>
              </div>
              {isOpen && (
                <SelectMenu
                  filteredOptions={years}
                  handleOptionClick={(e) => {
                    setDate(date.year(Number(e.value)));
                    setIsOpen(false);
                  }}
                  selectedOption={{ value: date.format('YYYY'), label: date.format('YYYY') }}
                  sx={{ top: '124%' }}
                />
              )}
            </div>
            {(showedArrows === 'right' || showedArrows === 'both') && (
              <div css={monthHeaderNavigationIconWrapperStyle({ position: 'right' })}>
                <IconButton
                  name={'triangleRight'}
                  type="tertiary"
                  onClick={() => handleArrow('forward')}
                  dataTestId="month_forward"
                />
              </div>
            )}
          </ClickAwayListener>
        </div>
        <Month
          year={date.year()}
          month={date.month()}
          onDaySelect={onDaySelect}
          selectedDays={selectedDays}
          disabledDates={disabledDates}
        />
      </div>
    </React.Fragment>
  );
};

export default React.memo(MonthWrapper);
