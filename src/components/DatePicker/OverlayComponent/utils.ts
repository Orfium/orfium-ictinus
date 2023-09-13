import { Dayjs } from 'dayjs';

import { Range } from './OverlayComponent';
import { currentDay } from '../utils';

export const getFromDate = (selectedDays: Range): Dayjs => {
  return selectedDays.from ?? currentDay;
};

export const getToDate = (selectedDays: Range): Dayjs => {
  if (selectedDays.from && selectedDays.to) {
    const monthsGap = Number(selectedDays.to?.month()) - Number(selectedDays.from?.month());

    /** DateRange is on the same month; in this case we render the next month  */
    if (monthsGap === 0) {
      return selectedDays.from?.month(selectedDays.from?.month() + 1);
    }

    /**
     * DateRange has more than 1 month between from.month and to.month; in this case we render the from.month
     * and the next one after from.month, so no months are skipped visually
     * */
    if (monthsGap > 1) {
      return selectedDays.from?.month(selectedDays.from?.month() + 1);
    }

    /** DateRange is between 2 months next to each other; in this case render the to.month  */
    return selectedDays.to;
  }

  return currentDay.month(currentDay.month() + 1);
};
