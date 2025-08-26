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

/** Stories constants */

export const mockDate = currentDay;
export const rangePickerOptions = [true, false];
export const filterTypeOptions = ['preset', 'added'] as const;

export const disableDates = {
  days: [
    mockDate.toDate(),
    mockDate.subtract(1, 'day').toDate(),
    mockDate.subtract(2, 'day').toDate(),
    mockDate.subtract(4, 'day').toDate(),
  ],
};
export const options = {
  'Disable days of week (only Monday)': { daysOfWeek: [0, 2, 3, 4, 5, 6] },
  'Disable dates after this day': { after: mockDate },
  'Disable dates before this day': { before: mockDate },
  'Disable dates before and after a date (-/+ 7 days)': {
    before: mockDate.subtract(7, 'day').toDate(),
    after: mockDate.add(7, 'day').toDate(),
  },
  'Enable dates from/to a date (7 days)': {
    before: mockDate.subtract(7, 'day').toDate(),
    after: mockDate.add(7, 'day').toDate(),
  },
  'Array of disabled dates(Today, last 2 days, and the 4th day to today)': disableDates,
};

export const dateFormatOptions = {
  "Enables system's locale format": undefined,
  'MM/DD/YYYY': 'MM/DD/YYYY',
  'DD/MM/YYYY': 'DD/MM/YYYY',
  'MMMM D, YYYY': 'MMMM D, YYYY',
  'dddd, MMMM D, YYYY': 'dddd, MMMM D, YYYY',
  'M/D/YYYY': 'M/D/YYYY',
  'MMM D, YYYY': 'MMM D, YYYY',
  'ddd, MMM D, YYYY': 'ddd, MMM D, YYYY',
  'DD MMM YYYY': 'DD MMM YYYY',
};
