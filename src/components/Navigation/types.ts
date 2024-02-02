import type { Location } from 'history';
import type { Params } from 'react-router-dom';

import type { AcceptedIconNames } from 'components/Icon';

export type NavigationMenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  isVisible: boolean;
  iconName: AcceptedIconNames;
  isActive?<S = Location['state']>(
    params: Readonly<Params<string>>,
    location: Location<S>
  ): boolean;
  options: NavigationMenuItem[];
};
