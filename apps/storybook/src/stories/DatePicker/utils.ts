import type { Dayjs } from 'utils/date';
import dayjs from 'utils/date';

const fakeDate = dayjs('11-03-2020 12:00:00');
const getDefaultDate = (date?: undefined | Dayjs) =>
  import.meta.env.NODE_ENV !== 'test' ? date : fakeDate;

export const currentDay: Dayjs =
  import.meta.env.STORYBOOK_ENV === 'true' ? fakeDate : (getDefaultDate(dayjs()) as Dayjs);
