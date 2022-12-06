import { Location, LocationState } from 'history';
import { match } from 'react-router';

import { AcceptedIconNames } from 'components/Icon/types';

export type DrawerMenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  isVisible: boolean;
  iconName: AcceptedIconNames;
  isActive?<Params extends { [K in keyof Params]?: string }, S = LocationState>(
    match: match<Params> | null,
    location: Location<S>
  ): boolean;
  options: DrawerMenuItem[];
};
