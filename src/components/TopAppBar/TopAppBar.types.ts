import React from 'react';

import { UserMenuProps } from './components/UserMenu/UserMenu';

export interface TopAppBarProps {
  /** The placeholder of the search component */
  searchPlaceholder?: string;
  /** The defaultValue of the search component */
  searchDefaultValue?: string;
  /** Flag indicating that the search is disabled */
  isSearchDisabled?: boolean;
  /** Callback to be triggered on onChange event of search component */
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback to be triggered on onKeyPress event of search component */
  onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Custom product logo */
  logoIcon?: React.ReactElement;
  /** Handler for opening end closing the Drawer. Burger menu only visible from breakpoint [tab-1024] */
  onMenuIconClick: () => void;
  /** Whatever is needed can be placed here. It will be placed on the left side of the user menu */
  additionalTools?: React.ReactElement | React.ReactElement[];
  /** User menu props */
  userMenu: UserMenuProps;
  /** Flag indicating the theme mode */
  dark?: boolean;
}
