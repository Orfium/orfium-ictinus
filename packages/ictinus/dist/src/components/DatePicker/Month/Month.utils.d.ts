import { Dayjs } from '../../../utils/date';
import { DisabledDates } from '../DatePicker.types';
export declare const calculateDisabledDays: (day: number | undefined, month: number, year: number, disabledDates?: DisabledDates) => boolean;
export declare const calculatedDayIsBetween: (day: number | undefined, month: number, year: number, from: Dayjs | undefined, to: Dayjs | undefined) => boolean;
export declare const calculateSelectedDayPosition: (day: number | undefined, position: "last" | "first", month: number, year: number, from: Dayjs | undefined, to: Dayjs | undefined) => boolean;
export declare const calculateSelectedDay: (day: number, month: number, year: number, from: Dayjs | undefined, to: Dayjs | undefined) => boolean;
export declare const getNumWeeksForMonth: (year: number, month: number) => number;
