import { AcceptedIconNames } from 'components/Icon/types';

export type MenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  visible: boolean;
  iconName: AcceptedIconNames;
  options: MenuItem[];
};
