/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Day from '../Day/Day';
import chunk from 'lodash/chunk';
import inRange from 'lodash/inRange';
import { Range } from '../OverlayComponent/OverlayComponent';
import isBetween from 'dayjs/plugin/isBetween';
import { DisabledDates } from '../DatePicker';
import { datesWrapperStyle, weekDayStyle, weekDaysWrapperStyle } from './Month.style';
import {
  calculatedDayIsBetween,
  calculateDisabledDays,
  calculateSelectedDay,
  calculateSelectedDayPosition,
} from './Month.utils';

dayjs.extend(isBetween);

function getNumWeeksForMonth(year: number, month: number) {
  const date = new Date(year, month - 1, 1);
  const day = date.getDay();
  const numDaysInMonth = new Date(year, month, 0).getDate();

  return Math.ceil((numDaysInMonth + day) / 7);
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thurdsday', 'Friday', 'Saturday', 'Sunday'];

type WeekRow = number[];

export type Props = {
  year: number;
  month: number;
  onDaySelect?: (date: Dayjs) => void;
  selectedDays: Range;
  disabledDates?: DisabledDates;
};

const Month: React.FC<Props> = ({ year, month, onDaySelect, selectedDays, disabledDates }) => {
  const weeksWithDays = React.useMemo<WeekRow[]>(() => {
    const monthDate = dayjs()
      .month(month)
      .year(year)
      .date(1);
    const daysOfMonth = monthDate.daysInMonth();
    const startDay = monthDate.day();
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
        {DAYS.map(day => (
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
                  disabled={Boolean(disabledDatesCalculated(day, month, year, disabledDates))}
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
