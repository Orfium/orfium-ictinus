import { Dayjs } from 'dayjs';

import { currentDay } from '../utils';
import { Range } from './OverlayComponent';

export const getFromDate = (selectedDays: Range): Dayjs => {
  return selectedDays.from ?? currentDay;
};

export const getToDate = (selectedDays: Range): Dayjs => {
  if (selectedDays.from && selectedDays.to) {
    /**
     * If DateRange has more than 1 month between from.month and to.month,
     * then show the from.month and the next one after from.month, so no months are skipped visually
     * */
    if (Number(selectedDays.to?.month()) - Number(selectedDays.from?.month()) > 1) {
      return selectedDays.from?.month(selectedDays.from?.month() + 1);
    }

    /** In this case from.month and to.month are next to eachother */
    return selectedDays.to;
  }

  return currentDay.month(currentDay.month() + 1);
};
