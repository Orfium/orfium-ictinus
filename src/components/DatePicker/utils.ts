import dayjs from 'dayjs';

export const currentDay = process.env.NODE_ENV !== 'test' ? dayjs() : dayjs('11-03-2020 12:00:00');

export const datepickerPropValue =
  process.env.NODE_ENV !== 'test' ? undefined : dayjs('11-03-2020 12:00:00');
