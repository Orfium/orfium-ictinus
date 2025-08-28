import type * as React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { NavigationMenuItem } from '~/components/Navigation';

type FunctionProps = {
  children: () => React.ReactNode;
};
export const Function = ({ children }: FunctionProps) => children();

/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: () => void;
  onBlur?: () => void;
};

//@TODO fix props to not overwrite button props from base
export type CommonButtonProps = Partial<
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'size' | 'css' | 'onBlur' | 'onClick' | 'type' | 'disabled'
  >
>;

//@TODO fix props to not overwrite div props from base
export type DivProps = Partial<Omit<React.HTMLProps<HTMLDivElement>, 'color' | 'size' | 'css'>>;

export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const DEFAULT_USER_MENU = {
  userName: 'Tom Cruise',
  onSelect: (selectedItem: string | number) => {
    alert(selectedItem);
  },
  items: ['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout'],
  userAvatar: { src: 'https://mui.com/static/images/avatar/1.jpg', letter: 'PV' },
  color: 'darkGrey-600',
};

export const menuItems: NavigationMenuItem[] = [
  {
    name: 'Long Menu Item Name',
    url: '/menu1',
    iconName: 'settings',
    isVisible: true,
    options: [
      {
        name: 'SubMenu1',
        url: '/submenu1',
        state: {
          test: 'hello from state',
        },
        isVisible: true,
        iconName: 'catalog',
        options: [],
      },
      {
        name: 'SubMenu2',
        url: '/submenu2',
        isVisible: true,
        iconName: 'verified',
        options: [],
      },
      {
        name: 'SubMenu3',
        url: '/submenu3',
        isVisible: true,
        iconName: 'conflict',
        options: [],
      },
      {
        name: 'SubMenu4',
        url: '/submenu4',
        isVisible: true,
        iconName: 'bookmark',
        options: [],
      },
    ],
  },
  {
    name: 'Menu2',
    url: '/menu2',
    iconName: 'catalog',
    isVisible: true,
    options: [
      {
        name: 'SubMenu5',
        url: '/submenu5',
        isVisible: true,
        iconName: 'asset',
        options: [],
      },
      {
        name: 'SubMenu6',
        url: '/submenu6',
        isVisible: true,
        iconName: 'asset',
        options: [],
      },
    ],
  },
  {
    name: 'Menu3',
    url: '/menu3',
    iconName: 'bookmark',
    isVisible: true,
    options: [
      {
        name: 'SubMenu7',
        url: '/submenu7',
        isVisible: true,
        iconName: 'asset',
        options: [],
      },
      {
        name: 'SubMenu8',
        url: '/submenu8',
        isVisible: true,
        iconName: 'catalog',
        options: [],
      },
      {
        name: 'SubMenu9',
        url: '/submenu9',
        isVisible: true,
        iconName: 'conflict',
        options: [],
      },
    ],
  },
  {
    name: 'Menu4',
    url: '/menu4',
    iconName: 'asset',
    isVisible: true,
    options: [],
  },
];
