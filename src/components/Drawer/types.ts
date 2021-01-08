import { AcceptedIconNames } from 'components/Icon/types';

export type MenuItem = {
  name: string;
  url: string;
  visible: boolean;
  iconName: AcceptedIconNames;
  options: MenuItem[];
};
