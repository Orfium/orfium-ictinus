/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
      <div css={{ margin: '0 10px', display: 'flex', flexDirection: 'column' }}>
        <div
          css={css`
            display: flex;
            align-content: center;
            justify-content: center;
            position: relative;
          `}
        >
          {(showedArrows === 'left' || showedArrows === 'both') && (
            <div
              onClick={() => handleArrow('back')}
              css={css`
                cursor: pointer;
                margin: auto 5px;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: fit-content;
                z-index: 10;
              `}
            >
              <Icon
                name={'fatArrowLeft'}
                color={theme.utils.getColor('lightGray', 500)}
                size={25}
              />
            </div>
          )}
          <div
            css={css`
              margin: 5px 0 6px;
              padding: 0;
              align-content: center;
              text-align: center;
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
            `}
          >
            <div
              css={css`
                margin: 0 ${theme.spacing.sm};
                padding: ${theme.spacing.sm};
                display: flex;
                justify-content: center;
                cursor: pointer;
              `}
              onClick={() => setOpen(true)}
            >
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
              css={css`
                cursor: pointer;
                margin: auto 5px;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                height: fit-content;
                z-index: 10;
              `}
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
