import dayjs, { Dayjs } from 'dayjs';

import { Range } from './OverlayComponent/OverlayComponent';

const fakeDate = dayjs('11-03-2020 12:00:00');
const getDefaultDate = (date?: undefined | Dayjs) =>
  process.env.NODE_ENV !== 'test' ? date : fakeDate;

export const currentDay: Dayjs =
  process.env.STORYBOOK_ENV === 'true' ? fakeDate : (getDefaultDate(dayjs()) as Dayjs);

export const initDates = (value: { from?: Date; to?: Date }): Range => {
  return {
    from: value.from ? dayjs(value.from) : undefined,
    to: value.to ? dayjs(value.to) : undefined,
  };
};
