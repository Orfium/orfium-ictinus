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

  const calculateSelected = useCallback(
    (day: number, month: number, year: number) => {
      if (!day) return false;

      const date = dayjs()
        .month(month)
        .year(year)
        .date(day);

      return [selectedDays.from?.format('D,M,YYYY'), selectedDays.to?.format('D,M,YYYY')].includes(
        date.format('D,M,YYYY')
      );
    },
    [selectedDays.from, selectedDays.to]
  );

  const calculateDisabled = useCallback(
    (day: number, month: number, year: number, disabledDates?: DisabledDates) => {
      if (!day) return false;

      const date = dayjs()
        .month(month)
        .year(year)
        .date(day);

      if (disabledDates?.after && disabledDates?.before) {
        return !date.isBetween(dayjs(disabledDates?.after), dayjs(disabledDates?.before));
      }
      if (disabledDates?.after) {
        return date.isAfter(dayjs(disabledDates?.after));
      }
      if (disabledDates?.before) {
        return date.isBefore(dayjs(disabledDates?.before));
      }
      if (disabledDates?.daysOfWeek) {
        return disabledDates?.daysOfWeek.includes(day);
      }

      return false;
    },
    []
  );

  const calculateIsBetween = useCallback(
    (day: number, month: number, year: number) => {
      if (!day) return false;

      const date = dayjs()
        .month(month)
        .year(year)
        .date(day);

      return (
        selectedDays.from &&
        selectedDays.to &&
        dayjs(date).isBetween(selectedDays.from, selectedDays.to)
      );
    },
    [selectedDays.from, selectedDays.to]
  );

  const calculateSelectedDayPosition = useCallback(
    (day: number, position: 'last' | 'first' = 'first') => {
      if (day && selectedDays.from && selectedDays.to) {
        const startDate = selectedDays.from.isAfter(selectedDays.to)
          ? selectedDays.to
          : selectedDays.from;
        const endDate = selectedDays.from.isAfter(selectedDays.to)
          ? selectedDays.from
          : selectedDays.to;
        const pickedDate = position === 'last' ? endDate : startDate;

        return (
          pickedDate &&
          pickedDate.isSame(
            dayjs()
              .month(month)
              .year(year)
              .date(day),
            'day'
          )
        );
      }

      return (
        day &&
        selectedDays.from?.isSame(
          dayjs()
            .month(month)
            .year(year)
            .date(day),
          'day'
        )
      );
    },
    [month, selectedDays.from, selectedDays.to, year]
  );

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
                disabled={Boolean(calculateDisabled(day, month, year, disabledDates))}
                isSelected={Boolean(calculateSelected(day, month, year))}
                isBetween={Boolean(calculateIsBetween(day, month, year))}
                isLast={Boolean(calculateSelectedDayPosition(day, 'last'))}
                isFirst={Boolean(calculateSelectedDayPosition(day, 'first'))}
              />
            ))}
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};

export default React.memo(Month);
