import { MenuItem } from '../../Drawer/types';

export const menuItems: MenuItem[] = [
  {
    name: 'Processed logs',
    url: '/menu1',
    iconName: 'ticTacToeArrow',
    visible: true,
    options: [
      {
        name: 'SubMenu1',
        url: '/submenu1',
        state: {
          test: 'hello from state',
        },
        visible: true,
        iconName: 'catalogOverview',
        options: [],
      },
      {
        name: 'SubMenu2',
        url: '/submenu2',
        visible: true,
        iconName: 'ownershipValidation',
        options: [],
      },
      {
        name: 'SubMenu3',
        url: '/submenu3',
        visible: true,
        iconName: 'conflicts',
        options: [],
      },
      {
        name: 'SubMenu4',
        url: '/submenu4',
        visible: true,
        iconName: 'referenceFile',
        options: [],
      },
    ],
  },
  {
    name: 'Menu2',
    url: '/menu2',
    iconName: 'catalog',
    visible: true,
    options: [
      {
        name: 'SubMenu5',
        url: '/submenu5',
        visible: true,
        iconName: 'musicNote',
        options: [],
      },
      {
        name: 'SubMenu6',
        url: '/submenu6',
        visible: true,
        iconName: 'musicNote',
        options: [],
      },
    ],
  },
  {
    name: 'Menu3',
    url: '/menu3',
    iconName: 'referenceFile',
    visible: true,
    options: [
      {
        name: 'SubMenu7',
        url: '/submenu7',
        visible: true,
        iconName: 'musicNote',
        options: [],
      },
      {
        name: 'SubMenu8',
        url: '/submenu8',
        visible: true,
        iconName: 'catalog',
        options: [],
      },
      {
        name: 'SubMenu9',
        url: '/submenu9',
        visible: true,
        iconName: 'conflicts',
        options: [],
      },
    ],
  },
  {
    name: 'Menu4',
    url: '/menu4',
    iconName: 'musicNote',
    visible: true,
    options: [],
  },
];
