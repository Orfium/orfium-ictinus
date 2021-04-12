import { AcceptedIconNames } from 'components/Icon/types';
import { Location, LocationState } from 'history';
import { match } from 'react-router';

export type MenuItem = {
  name: string;
  url: string;
  state?: Record<string, any> | null;
  visible: boolean;
  iconName: AcceptedIconNames;
  isActive?<Params extends { [K in keyof Params]?: string }, S = LocationState>(
    match: match<Params> | null,
    location: Location<S>
  ): boolean;
  options: MenuItem[];
};
