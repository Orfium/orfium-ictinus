import type { TestProps } from 'utils/types';

import type { SelectOption } from 'components/Select';

export type FilterOption = SelectOption;

export type SingleFilterProps = {
  /** The function that is used to return the selected options */
  onChange?: (selectedFilter?: FilterOption) => void;
  /** If false the user can select one option */
  isMulti?: false;
  /** the value of the select if select is controlled */
  selectedFilter?: FilterOption;
};

export type MultiFilterProps = {
  /** The function that is used to return the selected options */
  onChange?: (selectedFilter: FilterOption[]) => void;
  /** If true the user can select multiple options */
  isMulti?: true;
  /** The selected options in case of multiSelect */
  selectedFilter?: FilterOption[];
};

export type FilterAsyncSearchProps = {
  /** Whether the search is async */
  isAsync?: boolean;
  /** Callback for async search */
  onAsyncSearch?: (term: string) => void;
  /** Minimum characters required to trigger async search  */
  minCharactersToSearch?: number;
  /** Loading state for async search */
  isLoading?: boolean;
};

export type FilterType = 'preset' | 'added';

/** These props are passed to children in order for the custom child component to have access to the Filter's inner state */
export type FilterChildrenProps = {
  /** Whether the overlay is open or not */
  isOpen: boolean;
  /** Callback to change the state of isOpen */
  setIsOpen: any;
  /** The Label of the Filter*/
  filterLabel: string;
  /** Callback to change the state of the Label */
  setFilterLabel: any;
};

export type FilterProps = {
  /** The label of the Filter */
  label: string;
  /** The type of the filter */
  filterType?: FilterType;
  /** Whether the Filter is disabled */
  isDisabled?: boolean;
  /** Items that are being declared as filter options */
  items?: FilterOption[];
  /** The default value that is used when no filter is selected */
  defaultValue: FilterOption;
  /** Callback for when the clear all (X button) is clicked in single and multi filter */
  onClear?: () => void;
  /** Whether the filter is searchable */
  isSearchable?: boolean;
  /** [MultiFilter]: Callback for when the X button of an option is clicked */
  onFilterDelete?: (selectedFilter: FilterOption) => void;
  /** Whether the menu list is Virtualized */
  isVirtualized?: boolean;
  /** Whether the multi-filter should have a select-all option*/
  hasSelectAllOption?: boolean;
  /** In case of custom filter menu */
  children?: React.FC<FilterChildrenProps>;
} & FilterAsyncSearchProps &
  TestProps &
  (SingleFilterProps | MultiFilterProps);
