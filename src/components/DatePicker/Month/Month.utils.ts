import { DisabledDates } from '../DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { currentDay } from '../utils';

export const calculateDisabledDays = (
  day: number | undefined,
  month: number,
  year: number,
  disabledDates?: DisabledDates
) => {
  if (!day) return false;

  const date = currentDay
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
    return disabledDates?.daysOfWeek.includes(date.day());
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

  const date = currentDay
    .month(month)
    .year(year)
    .date(day);

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

    return (
      pickedDate &&
      pickedDate.isSame(
        currentDay
          .month(month)
          .year(year)
          .date(day),
        'day'
      )
    );
  }

  return (
    day &&
    from?.isSame(
      currentDay
        .month(month)
        .year(year)
        .date(day),
      'day'
    )
  );
};

export const calculateSelectedDay = (
  day: number,
  month: number,
  year: number,
  from: Dayjs | undefined,
  to: Dayjs | undefined
) => {
  if (!day) return false;

  const date = currentDay
    .month(month)
    .year(year)
    .date(day);

  return [from?.format('D,M,YYYY'), to?.format('D,M,YYYY')].includes(date.format('D,M,YYYY'));
};
