import { ExtraOption } from './DatePicker.types';
export declare const APPLY = "Apply";
export declare const CLEAR_ALL = "Clear All";
export declare const DATE_PICKER_LABEL = "Select Date";
export declare const DATE_RANGE_PICKER_LABEL = "Enter Date Range";
export declare const EMPTY_STATE: {
    from: any;
    to: any;
};
export declare const CALENDAR_DEFAULT_OPTIONS: ExtraOption[];
/** Stories constants */
export declare const mockDate: import('dayjs').Dayjs;
export declare const rangePickerOptions: boolean[];
export declare const filterTypeOptions: readonly ["preset", "added"];
export declare const disableDates: {
    days: Date[];
};
export declare const options: {
    'Disable days of week (only Monday)': {
        daysOfWeek: number[];
    };
    'Disable dates after this day': {
        after: import('dayjs').Dayjs;
    };
    'Disable dates before this day': {
        before: import('dayjs').Dayjs;
    };
    'Disable dates before and after a date (-/+ 7 days)': {
        before: Date;
        after: Date;
    };
    'Enable dates from/to a date (7 days)': {
        before: Date;
        after: Date;
    };
    'Array of disabled dates(Today, last 2 days, and the 4th day to today)': {
        days: Date[];
    };
};
export declare const dateFormatOptions: {
    "Enables system's locale format": any;
    'MM/DD/YYYY': string;
    'DD/MM/YYYY': string;
    'MMMM D, YYYY': string;
    'dddd, MMMM D, YYYY': string;
    'M/D/YYYY': string;
    'MMM D, YYYY': string;
    'ddd, MMM D, YYYY': string;
    'DD MMM YYYY': string;
};
