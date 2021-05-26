import { AcceptedColorComponentTypes, ColorShapeFromComponent } from '../../utils/themeFunctions';
import * as React from 'react';
import { Theme } from '../../theme';

export type FilterOption = {
  value: string | number;
  label: string;
};

export type StyleType = 'filled' | 'outlined' | 'elevated' | 'transparent';

export type Props = {
  /** the color of the button when the menu is opened based on our colors eg. red-400 */
  color: string;
  /** The type of the button - defaults to "primary" */
  buttonType?: AcceptedColorComponentTypes;
  /** Items that are being declared as menu options */
  items?: FilterOption[];
  /** The item selected on the menu */
  selectedItem: FilterOption;
  /** The default selected item */
  defaultValue: FilterOption;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: FilterOption) => void;
  /** The text of the button to show */
  label: React.ReactNode;
  /** Defines if the button is in disabled state */
  disabled?: boolean;
  /** Defines the style type of the button */
  styleType: StyleType;
};

export type TestProps = {
  dataTestId?: string;
};


export type BaseColorProps = {
  open: boolean;
  theme: Theme;
  calculatedColor: ColorShapeFromComponent;
  activeCalculatedColor: ColorShapeFromComponent;
  hasSelectedValue: boolean;
}

export type BackgroundColorProps = BaseColorProps & {
  buttonType: AcceptedColorComponentTypes;
  styleType: StyleType;
};

export type ButtonStyleProps = Omit<BaseColorProps, 'theme'> & {
  disabled?: boolean;
  styleType: StyleType;
  buttonType: AcceptedColorComponentTypes;
};

export type BorderProps = Omit<BaseColorProps, 'open' | 'calculatedColor'> & {
  styleType: StyleType;
};
