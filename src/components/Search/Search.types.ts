import type { FilterProps, SingleFilterProps } from 'components/Filter';
import type { TextFieldProps } from 'components/TextField';

export type filterConfig = Pick<
  FilterProps & SingleFilterProps,
  'selectedFilter' | 'onChange' | 'onClear' | 'defaultValue' | 'label' | 'items'
>;

export type SearchFilterConfig = {
  filterConfig?: Pick<
    FilterProps & SingleFilterProps,
    'selectedFilter' | 'onChange' | 'onClear' | 'defaultValue' | 'label' | 'items'
  >;
};

export type SearchProps = {
  /** A callback that's called when the user clicks the 'clear' icon */
  onClear: () => void;
} & Omit<
  TextFieldProps,
  | 'label'
  | 'size'
  | 'mask'
  | 'isMulti'
  | 'tags'
  | 'onMultiValueDelete'
  | 'onMultiValueClearAll'
  | 'status'
  | 'suffix'
  | 'isInteractive'
> &
  SearchFilterConfig;
