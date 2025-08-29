import type { Dayjs } from 'utils/date';
import dayjs from 'utils/date';

import type { DisabledDates } from '../DatePicker.types';
import { currentDay } from '../utils';

export const calculateDisabledDays = (
  day: number | undefined,
  month: number,
  year: number,
  disabledDates?: DisabledDates
) => {
  if (!day) return false;

  const date = currentDay.month(month).year(year).date(day);

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
    return disabledDates?.daysOfWeek.includes(date.day());
  }
  if (disabledDates?.days) {
    return Boolean(disabledDates?.days.find((cur) => dayjs(cur).isSame(dayjs(date), 'day')));
  }

  return false;
};

export const calculatedDayIsBetween = (
  day: number | undefined,
  month: number,
  year: number,
  from: Dayjs | undefined,
  to: Dayjs | undefined
) => {
  if (!day) return false;

  const date = currentDay.month(month).year(year).date(day);

  return from && to && dayjs(date).isBetween(from, to);
};

export const calculateSelectedDayPosition = (
  day: number | undefined,
  position: 'last' | 'first' = 'first',
  month: number,
  year: number,
  from: Dayjs | undefined,
  to: Dayjs | undefined
) => {
  if (day && from && to) {
    const startDate = from.isAfter(to) ? to : from;
    const endDate = from.isAfter(to) ? from : to;
    const pickedDate = position === 'last' ? endDate : startDate;

    return pickedDate && pickedDate.isSame(currentDay.month(month).year(year).date(day), 'day');
  }

  return day && from?.isSame(currentDay.month(month).year(year).date(day), 'day');
};

export const calculateSelectedDay = (
  day: number,
  month: number,
  year: number,
  from: Dayjs | undefined,
  to: Dayjs | undefined
) => {
  if (!day) return false;

  const date = currentDay.month(month).year(year).date(day);

  return [from?.format('D,M,YYYY'), to?.format('D,M,YYYY')].includes(date.format('D,M,YYYY'));
};

export const getNumWeeksForMonth = (year: number, month: number): number => {
  // Create a date object for the first day of the month
  const firstDayOfMonth = new Date(year, month, 1);

  // Get the day of the week for the first day (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
  const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Adjusting the index to start from Monday

  // Calculate the number of days in the month
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Calculate the number of days needed to complete the first week
  const daysToCompleteFirstWeek = 7 - firstDayOfWeek;

  // Calculate the number of remaining days after completing the first week
  const remainingDays = totalDaysInMonth - daysToCompleteFirstWeek;

  // Calculate the number of additional weeks needed for the remaining days
  const additionalWeeks = Math.ceil(remainingDays / 7);

  // Total weeks needed, including the first partial week
  const totalWeeks = 1 + additionalWeeks;

  return totalWeeks;
};
