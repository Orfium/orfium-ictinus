import dayjs, { Dayjs } from 'utils/date';

import { Range } from './OverlayComponent/OverlayComponent';

const fakeDate = dayjs('11-03-2020 12:00:00');
const getDefaultDate = (date?: undefined | Dayjs) =>
  process.env.NODE_ENV !== 'test' ? date : fakeDate;

export const currentDay =
  process.env.STORYBOOK_ENV === 'true' ? fakeDate : (getDefaultDate(dayjs()) as Dayjs);

export const datepickerPropValue = getDefaultDate();

export const initDates = (
  value: {
    from?: Date;
    to?: Date;
  },
  isDefaultNow: boolean
): Range => {
  const hasDefaultDate = isDefaultNow || Object.values(value).some((v) => v);

  return {
    from: hasDefaultDate ? dayjs(value.from || currentDay) : undefined,
    to: hasDefaultDate ? dayjs(value.to || currentDay) : undefined,
  };
};
