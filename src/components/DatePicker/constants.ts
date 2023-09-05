import { ExtraOption } from './DatePicker.types';
import { currentDay } from './utils';

export const APPLY_DATES = 'Apply Dates'
export const CLEAR_ALL = 'Clear All'

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
