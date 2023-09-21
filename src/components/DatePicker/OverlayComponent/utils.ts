import { Dayjs } from 'dayjs';

import { currentDay } from '../utils';
import { Range } from './OverlayComponent';

export const getLeftCalendarDate = (selectedDays: Range): Dayjs => {
  return selectedDays.from ?? currentDay;
};

export const getRightCalendarDate = (selectedDays: Range): Dayjs => {
  return (
    selectedDays.from?.month(selectedDays.from?.month() + 1) ??
    currentDay.month(currentDay.month() + 1)
  );
};
