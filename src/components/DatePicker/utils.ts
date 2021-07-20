import dayjs from 'dayjs';
import { Range } from './OverlayComponent/OverlayComponent';

export const currentDay = process.env.NODE_ENV !== 'test' ? dayjs() : dayjs('11-03-2020 12:00:00');

export const datepickerPropValue =
  process.env.NODE_ENV !== 'test' ? undefined : dayjs('11-03-2020 12:00:00');

export const initDates = (
  value: {
    from?: Date;
    to?: Date;
  },
  isDefaultNow: boolean
): Range => {
  const isToday = !Object.values(value).every(v => !v) || isDefaultNow;

  return {
    from: isToday ? dayjs(value.from) : undefined,
    to: isToday ? dayjs(value.to) : undefined,
  };
};
