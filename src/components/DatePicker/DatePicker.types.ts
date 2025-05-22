import type { FilterType } from 'components/Filter/Filter.types';
import type { Dayjs } from 'utils/date';
import type { TextFieldProps } from '../TextField/TextField';

export type DisabledDates = {
  daysOfWeek?: number[];
  days?: Date[];
  after?: Date;
  before?: Date;
};

export type DateRange = { from: Date | undefined; to: Date | undefined };

export type DatePickerProps = {
  /** This property is to define if this is a day picker or a day range picker */
  isRangePicker?: boolean;
  /** A callback to return user selection */
  onChange?: (range: DateRange) => void;
  /** A callback that runs ONLY on added filters when the users clears the date (presses the x button)  */
  onClear?: () => void;
  /** Option to disable some dates */
  disableDates?: DisabledDates;
  /** Value to define if needed an initial state or to handle it externally */
  value: DateRange;
  /** Calendar options for DateRangePicker */
  options?: ExtraOption[];
  /** Props of the TextField input */
  inputProps?: Omit<TextFieldProps, 'size'>;
  /** The format of the date displayed in the input field */
  dateFormatOverride?: DateFormatType;
  /** if the datepicker can be clear with backspace */
  isClearable?: boolean;
  /** if the datepicker's default date is today instead of placeholder text */
  /** @deprecated This prop is being deprecated and is not used as you can manipulate date from value, will be removed in the future **/
  isDefaultNow?: boolean;
  /** placement of the datepicker which will open. Either above of the parent or below. Defaults to bottom */
  placement?: 'top' | 'bottom';
  /** Style properties for the DatePicker with a filter base */
  filterConfig?: {
    /** The filter's label */
    label?: string;
    /** This property defines the Filter's type */
    filterType?: FilterType;
  };
};

export type ExtraOption = { value: string; label: string; dates: Dayjs[] };

export type DateFormatType =
  | 'MM/DD/YYYY'
  | 'DD/MM/YYYY'
  | 'MMMM D, YYYY'
  | 'dddd, MMMM D, YYYY'
  | 'M/D/YYYY'
  | 'MMM D, YYYY'
  | 'ddd, MMM D, YYYY'
  | 'DD MMM YYYY';
