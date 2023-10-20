import type * as React from 'react';

import type { Theme } from '../../theme';
import type { ColorShapeFromComponent } from '../../utils/themeFunctions';
import type { SelectOption } from '../Select';

export type FilterOption = SelectOption;

export type StyleType = 'filled' | 'transparent';

export type FilterType = 'preset' | 'added';

export type FilterProps = {
  /** The type of the button - defaults to "primary" */
  buttonType?: 'primary' | 'secondary';
  /** Items that are being declared as menu options */
  items: FilterOption[];
  /** The default value. The default value is not an item of the items, is a kind of extra item that
   * on top of the items and is displayed always first */
  defaultValue: FilterOption;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: FilterOption) => void;
  /**
   * For SingleFilter: callback for the X button of the 'added' type filter
   * For MultiFilter: callback for the Clear All button
   */
  onClear?: () => void;
  /** A callback that's called when the user clicks the 'clear' icon of a specific Chip in MultiFilter */
  onFilterDelete?: (option: FilterOption) => void;
  /** The text of the button to show */
  label: React.ReactNode;
  /** Defines the style type of the button */
  styleType: StyleType;
  /** Defines the filter type */
  filterType?: FilterType;
  /** The selected item of the menu. This is an item of the the items list */
  selectedItem?: FilterOption;
  /** Defines if the button is in disabled state */
  isDisabled?: boolean;
  /** if the options are searchable */
  isSearchable?: boolean;
  /** the function to fetch new options */
  onAsyncSearch?: (term: string) => void;
  /** after how many characters to start searching (default = 0) */
  minCharactersToSearch?: number;
  /** if the search request is loading */
  isLoading?: boolean;
  /** Whether the Options List is Virtualized or not */
  isVirtualized?: boolean;
  /** If true the user can select multiple filters */
  isMulti?: boolean;
  /** The selected filters in case of MultiFilter */
  /** @TODO merge selectedItem with selectedItems in v5 */
  selectedItems?: FilterOption[];
  /** Whether the MultiFilter should have a Select All option*/
  hasSelectAllOption?: boolean;
  /** data-testid suffix */
  dataTestId?: string;
};

export type BaseColorProps = {
  isOpen: boolean;
  theme: Theme;
  calculatedColor: ColorShapeFromComponent;
  hasSelectedValue: boolean;
};

export type BackgroundColorProps = BaseColorProps & {
  styleType: StyleType;
};

export type ButtonStyleProps = Omit<BaseColorProps, 'theme'> & {
  isDisabled?: boolean;
  styleType: StyleType;
  filterType: FilterType;
};

export type BorderProps = BaseColorProps & {
  styleType: StyleType;
  filterType: FilterType;
  isDivider?: boolean;
  state?: 'normal' | 'hover';
};

export type HoverBorderProps = BaseColorProps & {
  styleType: StyleType;
  filterType: FilterType;
};
