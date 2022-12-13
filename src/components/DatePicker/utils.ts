import dayjs from 'dayjs';
import { Range } from './OverlayComponent/OverlayComponent';

export const currentDay = dayjs('11-03-2020 12:00:00');

export const datepickerPropValue =
  process.env.NODE_ENV !== 'test' ? undefined : dayjs('11-03-2020 12:00:00');

export const initDates = (
  value: {
    from?: Date;
    to?: Date;
  },
  isDefaultNow: boolean
): Range => {
  const hasDefaultDate = isDefaultNow || Object.values(value).some(v => v);

  return {
    from: hasDefaultDate ? dayjs(value.from) : undefined,
    to: hasDefaultDate ? dayjs(value.to) : undefined,
  };
};
