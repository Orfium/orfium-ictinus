import { Dayjs } from 'dayjs';
import useTheme from 'hooks/useTheme';
import range from 'lodash/range';
import React, { useMemo, useState } from 'react';

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
              data-testid="month_back"
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
                        color={theme.utils.getColor('darkGrey', 850)}
                      />
                    }
                    dataTestId={'month'}
                  >
                    {date.format('MMMM')} {date.format('YYYY')}
                  </Button>
                ) : (
                  <div data-testid={`${showedArrows !== 'both' ? showedArrows + '_' : ''}month`}>
                    {date.format('MMMM')} {date.format('YYYY')}
                  </div>
                )}
              </div>
              {open && (
                <SelectMenu
                  filteredOptions={years}
                  handleOptionClick={(e) => {
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
                data-testid="month_forward"
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
