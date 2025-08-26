import type { Dayjs } from 'dayjs';

import type { Range } from './OverlayComponent';
import { currentDay } from '../utils';

export const getLeftCalendarDate = (selectedDays: Range): Dayjs => {
  return selectedDays.from ?? currentDay;
};

export const getRightCalendarDate = (selectedDays: Range): Dayjs => {
  return (
    selectedDays.from?.month(selectedDays.from?.month() + 1) ??
    currentDay.month(currentDay.month() + 1)
  );
};
