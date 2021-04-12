import { AcceptedIconNames } from 'components/Icon/types';
import * as H from 'history';
import { match } from 'react-router';

export type MenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  visible: boolean;
  iconName: AcceptedIconNames;
  isActive?<Params extends { [K in keyof Params]?: string }>(
    match: match<Params> | null,
    location: H.Location
  ): boolean;
  options: MenuItem[];
};
