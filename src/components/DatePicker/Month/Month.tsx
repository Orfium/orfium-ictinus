/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Day from '../Day/Day';
import chunk from 'lodash/chunk';
import inRange from 'lodash/inRange';
import useTheme from '../../../hooks/useTheme';
import { useCallback } from 'react';
import { Range } from '../OverlayComponent/OverlayComponent';
const isBetween = require('dayjs/plugin/isBetween');
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
};

const Month: React.FC<Props> = ({ year, month, onDaySelect, selectedDays }) => {
  const theme = useTheme();
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

  const calculateSelected = useCallback(
    (day: number) => {
      if (!day) return false;

      const date = dayjs()
        .month(month)
        .year(year)
        .date(day);

      return [selectedDays.from?.format('D,M,YYYY'), selectedDays.to?.format('D,M,YYYY')].includes(
        date.format('D,M,YYYY')
      );
    },
    [month, selectedDays, year]
  );

  const calculateIsBetween = useCallback(
    (day: number) => {
      if (!day) return false;

      const date = dayjs()
        .month(month)
        .year(year)
        .date(day);

      return dayjs(date).isBetween(selectedDays.from, selectedDays.to || selectedDays.from);
    },
    [month, selectedDays, year]
  );

  return (
    <React.Fragment>
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-color: ${theme.utils.getColor('lightGray', 500)};
          `}
        >
          {DAYS.map(day => (
            <div
              key={day}
              css={css`
                color: ${theme.utils.getColor('lightGray', 500)};
                padding: ${theme.spacing.md} 0;
                width: 39px;
                text-align: center;
              `}
            >
              {day.substr(0, 2)}
            </div>
          ))}
        </div>
      </div>
      <div css={{ display: 'table', borderCollapse: 'separate', borderSpacing: '0 2px' }}>
        <div
          css={css`
            display: table-row-group;
          `}
        >
          {weeksWithDays.map(week => (
            <tr key={`${year}-${month}-${week}-week`}>
              {week.map((day, dayIndex) => (
                <Day
                  year={year}
                  month={month}
                  day={day}
                  onSelect={onDaySelect}
                  isSelected={calculateSelected(day)}
                  isBetween={calculateIsBetween(day)}
                  isLast={selectedDays.to?.date() === day}
                  isFirst={selectedDays.from?.date() === day}
                  key={`${week}-${year}-${month}-${dayIndex}-day`}
                />
              ))}
            </tr>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Month;
