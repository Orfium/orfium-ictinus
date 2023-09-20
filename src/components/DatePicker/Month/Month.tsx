import isBetween from 'dayjs/plugin/isBetween';
import { chunk, inRange } from 'lodash';
import { useCallback } from 'react';
import * as React from 'react';
import dayjs, { Dayjs } from 'utils/date';

import { datesWrapperStyle, weekDayStyle, weekDaysWrapperStyle } from './Month.style';
import {
  calculatedDayIsBetween,
  calculateDisabledDays,
  calculateSelectedDay,
  calculateSelectedDayPosition,
  getNumWeeksForMonth,
} from './Month.utils';
import { DisabledDates } from '../DatePicker.types';
import Day from '../Day/Day';
import { Range } from '../OverlayComponent/OverlayComponent';
import { currentDay } from '../utils';

dayjs.extend(isBetween);

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thurdsday', 'Friday', 'Saturday', 'Sunday'];

export type WeekRow = number[];

export type MonthProps = {
  year: number;
  month: number;
  onDaySelect?: (date: Dayjs) => void;
  selectedDays: Range;
  disabledDates?: DisabledDates;
};

const Month: React.FC<MonthProps> = ({ year, month, onDaySelect, selectedDays, disabledDates }) => {
  const weeksWithDays = React.useMemo<WeekRow[]>(() => {
    const monthDate = currentDay.month(month).year(year).date(1);
    const daysOfMonth = monthDate.daysInMonth();
    /**
     * Dayjs uses 0-6 (Sun-Sat) indexing for days of the week, while the reduce callback on line 48 uses
     * 1-7 (Mon-Sun) indexing for calculating the days array for the calendar grid. To resolve this conflict,
     * we replace the 0 used for Sunday with 7, so that Dayjs can match our internal indexing.
     */
    const startDay = monthDate.day() || 7;
    const daysPerWeekCount = 7;
    const weeksCount = getNumWeeksForMonth(year, month);
    const daysForThisMonthsWeeks = Array(weeksCount * daysPerWeekCount).fill(null);
    const days = daysForThisMonthsWeeks.reduce((acc, __day, index) => {
      const dayIndex = index + 1; // to start for monday
      const actualDay = inRange(dayIndex, startDay, daysOfMonth + startDay)
        ? dayIndex - startDay + 1
        : undefined;

      return [...acc, actualDay];
    }, []);

    return chunk(days, daysPerWeekCount);
  }, [year, month]);

  const calculateSelected = useCallback(calculateSelectedDay, []);
  const disabledDatesCalculated = useCallback(calculateDisabledDays, []);
  const calculateIsBetween = useCallback(calculatedDayIsBetween, []);
  const calculateSelectedDayFirstOrLast = useCallback(calculateSelectedDayPosition, []);

  return (
    <React.Fragment>
      <div css={weekDaysWrapperStyle()}>
        {DAYS.map((day) => (
          <div key={day} css={weekDayStyle()}>
            {day.substr(0, 2)}
          </div>
        ))}
      </div>
      <table css={datesWrapperStyle()}>
        <tbody>
          {weeksWithDays.map((week, weekIndex) => (
            <tr
              // eslint-disable-next-line react/no-array-index-key
              key={`${year}-${month}-${weekIndex}-week`}
            >
              {week.map((day, dayIndex) => (
                <Day
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${year}-${month}-${weekIndex}-${dayIndex}-day`}
                  year={year}
                  month={month}
                  day={day}
                  onSelect={onDaySelect}
                  isDisabled={Boolean(disabledDatesCalculated(day, month, year, disabledDates))}
                  isSelected={Boolean(
                    calculateSelected(day, month, year, selectedDays.from, selectedDays.to)
                  )}
                  isBetween={Boolean(
                    calculateIsBetween(day, month, year, selectedDays.from, selectedDays.to)
                  )}
                  isLast={Boolean(
                    calculateSelectedDayFirstOrLast(
                      day,
                      'last',
                      month,
                      year,
                      selectedDays.from,
                      selectedDays.to
                    )
                  )}
                  isFirst={Boolean(
                    calculateSelectedDayFirstOrLast(
                      day,
                      'first',
                      month,
                      year,
                      selectedDays.from,
                      selectedDays.to
                    )
                  )}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default React.memo(Month);
