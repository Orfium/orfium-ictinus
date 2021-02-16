/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';
import range from 'lodash/range';
import { SelectOption } from 'components/Select/Select';
import useTheme from 'hooks/useTheme';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import Icon from 'components/Icon';
import Button from 'components/Button';
import SelectMenu from 'components/Select/components/SelectMenu';
import Month from '../../../Month/Month';
import { Range } from '../../OverlayComponent';
import { DisabledDates } from '../../../DatePicker';
import {
  monthHeaderNavigationIconWrapperStyle,
  monthHeaderTitleStyle,
  monthHeaderTitleWrapperStyle,
  monthHeaderWrapperStyle,
  monthWrapperStyle,
} from './MonthWrapper.style';

type Props = {
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

  return years.map(year => ({
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
}: Props) => {
  const [open, setOpen] = useState(false);

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
                color={theme.utils.getColor('lightGray', 500)}
                size={25}
              />
            </div>
          )}

          <ClickAwayListener
            onClick={() => {
              setOpen(false);
            }}
          >
            <div css={monthHeaderTitleWrapperStyle({ isRangePicker })}>
              <div css={monthHeaderTitleStyle({ isRangePicker })}>
                {!isRangePicker ? (
                  <Button
                    onClick={() => setOpen(!open)}
                    color={'neutralWhite-100'}
                    iconRight={
                      <Icon
                        name={'triangleDown'}
                        size={10}
                        color={theme.utils.getColor('lightGray', 500)}
                      />
                    }
                  >
                    {date.format('MMMM')} {date.format('YYYY')}
                  </Button>
                ) : (
                  <div>
                    {date.format('MMMM')} {date.format('YYYY')}
                  </div>
                )}
              </div>
              {open && (
                <SelectMenu
                  filteredOptions={years}
                  handleOptionClick={e => {
                    setDate(date.year(Number(e.value)));
                    setOpen(false);
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
                  color={theme.utils.getColor('lightGray', 500)}
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
