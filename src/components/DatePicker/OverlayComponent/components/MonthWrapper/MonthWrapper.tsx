import useTheme from 'hooks/useTheme';
import { range } from 'lodash';
import React, { useMemo, useState } from 'react';
import { Dayjs } from 'utils/date';

import { DisabledDates } from '../../../DatePicker';
import Month from '../../../Month/Month';
import { Range } from '../../OverlayComponent';
import {
  monthHeaderNavigationIconWrapperStyle,
  monthHeaderTitleStyle,
  monthHeaderTitleWrapperStyle,
  monthHeaderWrapperStyle,
  monthWrapperStyle,
} from './MonthWrapper.style';
import Button from 'components/Button';
import Icon from 'components/Icon';
import SelectMenu from 'components/Select/components/SelectMenu';
import { SelectOption } from 'components/Select/Select';
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

  const theme = useTheme();
  const years = useMemo(() => generateArrayOfYears(date), [date]);

  return (
    <React.Fragment>
      <div css={monthWrapperStyle()}>
        <div css={monthHeaderWrapperStyle()}>
          {(showedArrows === 'left' || showedArrows === 'both') && (
            <div
              onClick={() => handleArrow('back')}
              css={monthHeaderNavigationIconWrapperStyle({ position: 'left' })}
            >
              <Icon
                name={'chevronSmallLeft'}
                color={theme.utils.getColor('darkGrey', 850)}
                size={25}
              />
            </div>
          )}

          <ClickAwayListener
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div css={monthHeaderTitleWrapperStyle({ isRangePicker })}>
              <div css={monthHeaderTitleStyle({ isRangePicker })}>
                {!isRangePicker ? (
                  <Button onClick={() => setIsOpen(!isOpen)} iconRightName={'triangleDown'}>
                    {date.format('MMMM')} {date.format('YYYY')}
                  </Button>
                ) : (
                  <div>
                    {date.format('MMMM')} {date.format('YYYY')}
                  </div>
                )}
              </div>
              {isOpen && (
                <SelectMenu
                  filteredOptions={years}
                  handleOptionClick={(e) => {
                    setDate(date.year(Number(e.value)));
                    setIsOpen(false);
                  }}
                  selectedOption={date.format('YYYY')}
                />
              )}
            </div>
            {(showedArrows === 'right' || showedArrows === 'both') && (
              <div
                onClick={() => handleArrow('forward')}
                css={monthHeaderNavigationIconWrapperStyle({ position: 'right' })}
              >
                <Icon
                  name={'chevronSmallRight'}
                  color={theme.utils.getColor('darkGrey', 850)}
                  size={25}
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
