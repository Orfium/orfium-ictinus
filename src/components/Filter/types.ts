import * as React from 'react';

import { Theme } from '../../theme';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { SelectOptionValues } from '../Select/Select';

export type FilterOption = SelectOptionValues;

export type StyleType = 'filled' | 'transparent';

export type FilterType = 'preset' | 'added';

export type Props = {
  /** The type of the button - defaults to "primary" */
  buttonType?: 'primary' | 'secondary';
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
  hasSelectedValue: boolean;
};

export type BackgroundColorProps = BaseColorProps & {
  styleType: StyleType;
};

export type ButtonStyleProps = Omit<BaseColorProps, 'theme'> & {
  disabled?: boolean;
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
