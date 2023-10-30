import { ReactComponentLike } from 'prop-types';
import { AnchorHTMLAttributes } from 'react';

import { AcceptedIconNames } from 'components/Icon';

type LinkSizes = 1 | 2 | 3;

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** This prop might be needed in case of props forwarding using third-party libraries */
  to?: any;
  /** The type of the Link in terms of style */
  type?: 'primary' | 'inverted';
  /** The placement of the link */
  placement?: 'block' | 'inline';
  /** The size of the Link */
  size?: LinkSizes;
  /** Optional icon to add at the right of the Link */
  iconName?: AcceptedIconNames;
  /** Whether the link is disabled*/
  isDisabled?: boolean;
  /** The component used for the root node */
  component?: ReactComponentLike;
  /** Data Test Id prefix **/
  dataTestPrefixId?: string;
};
