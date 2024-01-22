import type { Location, LocationState } from 'history';
import type { match } from 'react-router';

import type { AcceptedIconNames } from 'components/Icon';

export type NavigationMenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  isVisible: boolean;
  iconName: AcceptedIconNames;
  isActive?<Params extends { [K in keyof Params]?: string }, S = LocationState>(
    match: match<Params> | null,
    location: Location<S>
  ): boolean;
  options: NavigationMenuItem[];
};
