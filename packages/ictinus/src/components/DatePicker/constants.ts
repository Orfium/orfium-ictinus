import type { ExtraOption } from './DatePicker.types';
import { currentDay } from './utils';

export const APPLY = 'Apply';
export const CLEAR_ALL = 'Clear All';

export const DATE_PICKER_LABEL = 'Select Date';
export const DATE_RANGE_PICKER_LABEL = 'Enter Date Range';

export const EMPTY_STATE = { from: undefined, to: undefined };

export const CALENDAR_DEFAULT_OPTIONS: ExtraOption[] = [
  {
    value: 'last-7-days',
    label: 'Last 7 days',
    dates: [currentDay.subtract(7, 'day'), currentDay],
  },
  {
    value: 'last-30-days',
    label: 'Last 30 days',
    dates: [currentDay.subtract(30, 'day'), currentDay],
  },
  {
    value: 'custom',
    label: 'Custom',
    dates: [currentDay],
  },
];
