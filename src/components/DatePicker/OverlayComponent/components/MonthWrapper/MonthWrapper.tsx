/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Dayjs } from 'dayjs';
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

const MonthWrapper = ({
  setDate,
  onDaySelect,
  selectedDays,
  date,
  handleArrow,
  showedArrows = 'both',
  disabledDates,
}: {
  showedArrows: 'left' | 'right' | 'both';
  date: Dayjs;
  selectedDays: Range;
  onDaySelect: (date: Dayjs) => void;
  handleArrow: (p: 'forward' | 'back') => void;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  disabledDates?: DisabledDates;
}) => {
  const [open, setOpen] = useState(false);

  function generateArrayOfYears(): SelectOption[] {
    const span = 10;
    const max = new Date().getFullYear() + span;
    const min = new Date().getFullYear() - span;
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }

    return years.map(year => ({ value: year.toString(), label: year.toString() }));
  }

  const theme = useTheme();
  const years = generateArrayOfYears();

  return (
    <ClickAwayListener
      onClick={() => {
        setOpen(false);
      }}
    >
      <div css={monthWrapperStyle()}>
        <div css={monthHeaderWrapperStyle()}>
          {(showedArrows === 'left' || showedArrows === 'both') && (
            <div
              onClick={() => handleArrow('back')}
              css={monthHeaderNavigationIconWrapperStyle({ position: 'left' })}
            >
              <Icon
                name={'fatArrowLeft'}
                color={theme.utils.getColor('lightGray', 500)}
                size={25}
              />
            </div>
          )}
          <div css={monthHeaderTitleWrapperStyle()}>
            <div css={monthHeaderTitleStyle()} onClick={() => setOpen(true)}>
              <Button
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
                name={'fatArrowRight'}
                color={theme.utils.getColor('lightGray', 500)}
                size={25}
              />
            </div>
          )}
        </div>
        <Month
          year={date.year()}
          month={date.month()}
          onDaySelect={onDaySelect}
          selectedDays={selectedDays}
          disabledDates={disabledDates}
        />
      </div>
    </ClickAwayListener>
  );
};

export default React.memo(MonthWrapper);
