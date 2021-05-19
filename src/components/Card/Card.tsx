import { Elevation, Spacing } from 'index';
import React from 'react';

import { cardStyle } from './Card.style';

export type Props = {
  /** Elevation of Card */
  elevated?: keyof Elevation;
  /** Transparency of Card: if false the Card's background is white, otherwise it's transparent */
  transparent?: boolean;
  /** Border radius of Card: if not provided it defaults to 0 */
  radius?: keyof Spacing;
};

const Card: React.FC<Props> = ({ elevated, transparent = false, radius, children }) => {
  return <div css={cardStyle({ elevated, transparent, radius })}>{children}</div>;
};

export default Card;
