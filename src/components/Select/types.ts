import { InputHTMLAttributes } from 'react';

import { TestProps } from '../../utils/types';
import { OwnProps as IconProps } from '../Icon';
import { TextFieldProps } from '../TextField';

export type SelectOptionValues = {
  value: string | number;
  label: string;
  iconProps?: IconProps;
};

export type SelectOptionBase = {
  isDisabled?: boolean;
  helperText?: string;
  // @TODO remove this as it is not used?
  tooltipInfo?: string;
  options?: SelectOption[];
  isCreated?: boolean;
};

export type SelectOption = SelectOptionBase & SelectOptionValues;

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size' & 'onChange'>>;

export type MultiSelectProps = {
  /** The function that is used to return the selected options */
  onChange?: (selectedOption: SelectOption[]) => void;
  /** If true the user can select multiple options */
  isMulti: true;
  /** The selected options in case of multiSelect */
  /** @TODO merge selectedOption with selectedOptions in v5 */
  selectedOption?: SelectOption[];
};
export type SingleSelectProps = {
  /** The function that is used to return the selected options */
  onChange?: (selectedOption?: SelectOption) => void;
  /** If false the user can select one option */
  isMulti?: never;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
};
export type SelectProps = {
  /** Options for the select dropdown */
  options: SelectOption[];
  /** if the component is used asynchronously */
  isAsync?: boolean;
  /** the function to fetch new options */
  asyncSearch?: (term: string) => void;
  /** after how many characters to start searching (default = 0) */
  minCharactersToSearch?: number;
  /** if searched text should be highlighted in available options */
  hasHighlightSearch?: boolean;
  /** if the options are searchable */
  isSearchable?: boolean;
  /** data-testid suffix */
  dataTestId?: string;
  /** if component is loading */
  isLoading?: boolean;
  /** if options list is virtualized */
  isVirtualized?: boolean;
  /**
   * If true, then in the case of a searched option that is not found in the Options list of MultiSelect,
   * the user can create this option.
   * */
  isCreatable?: boolean;
  /** Whether the MultiSelect should have a Select All option */
  hasSelectAllOption?: boolean;
} & (MultiSelectProps | SingleSelectProps) &
  Omit<TextFieldProps, 'onChange' | 'mask'> &
  Omit<InputProps, 'onChange'> &
  TestProps;
