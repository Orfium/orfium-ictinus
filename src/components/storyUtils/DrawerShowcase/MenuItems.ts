import { DrawerMenuItem } from '../../Drawer';

export const menuItems: DrawerMenuItem[] = [
  {
    name: 'Long Menu Item Name',
    url: '/menu1',
    iconName: 'ticTacToeArrow',
    isVisible: true,
    options: [
      {
        name: 'SubMenu1',
        url: '/submenu1',
        state: {
          test: 'hello from state',
        },
        isVisible: true,
        iconName: 'catalogOverview',
        options: [],
      },
      {
        name: 'SubMenu2',
        url: '/submenu2',
        isVisible: true,
        iconName: 'ownershipValidation',
        options: [],
      },
      {
        name: 'SubMenu3',
        url: '/submenu3',
        isVisible: true,
        iconName: 'conflicts',
        options: [],
      },
      {
        name: 'SubMenu4',
        url: '/submenu4',
        isVisible: true,
        iconName: 'referenceFile',
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
        iconName: 'musicNote',
        options: [],
      },
      {
        name: 'SubMenu6',
        url: '/submenu6',
        isVisible: true,
        iconName: 'musicNote',
        options: [],
      },
    ],
  },
  {
    name: 'Menu3',
    url: '/menu3',
    iconName: 'referenceFile',
    isVisible: true,
    options: [
      {
        name: 'SubMenu7',
        url: '/submenu7',
        isVisible: true,
        iconName: 'musicNote',
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
        iconName: 'conflicts',
        options: [],
      },
    ],
  },
  {
    name: 'Menu4',
    url: '/menu4',
    iconName: 'musicNote',
    isVisible: true,
    options: [],
  },
];
