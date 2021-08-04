import * as React from 'react';

import { Theme } from '../../theme';
import { AcceptedColorComponentTypes, ColorShapeFromComponent } from '../../utils/themeFunctions';

export type FilterOption = {
  value: string | number;
  label: string;
};

export type StyleType = 'filled' | 'outlined' | 'elevated' | 'transparent';

export type FilterType = 'preset' | 'added';

export type Props = {
  /** the color of the button when the menu is opened based on our colors eg. red-400 */
  color: string;
  /** The type of the button - defaults to "primary" */
  buttonType?: AcceptedColorComponentTypes;
  /** Items that are being declared as menu options */
  items: FilterOption[];
  /** The default value. The default value is not an item of the items, is a kind of extra item that
   * on top of the items and is displayed always first */
  defaultValue: FilterOption;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: FilterOption) => void;
  /** A callback that is being triggered when type is added and you press the X icon */
  onClear?: () => void;
  /** The text of the button to show */
  label: React.ReactNode;
  /** Defines the style type of the button */
  styleType: StyleType;
  /** Defines the filter type */
  filterType?: FilterType;
  /** The selected item of the menu. This is an item of the the items list */
  selectedItem?: FilterOption;
  /** Defines if the button is in disabled state */
  disabled?: boolean;
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
  /** data-testid suffix */
  dataTestId?: string;
};

export type BaseColorProps = {
  open: boolean;
  theme: Theme;
  calculatedColor: ColorShapeFromComponent;
  activeCalculatedColor: ColorShapeFromComponent;
  hasSelectedValue: boolean;
};

export type BackgroundColorProps = BaseColorProps & {
  buttonType: AcceptedColorComponentTypes;
  styleType: StyleType;
};

export type ButtonStyleProps = Omit<BaseColorProps, 'theme'> & {
  disabled?: boolean;
  styleType: StyleType;
  buttonType: AcceptedColorComponentTypes;
  filterType: FilterType;
};

export type BorderProps = BaseColorProps & {
  styleType: StyleType;
  filterType: FilterType;
};

export type HoverBorderProps = BaseColorProps & {
  styleType: StyleType;
  filterType: FilterType;
};
