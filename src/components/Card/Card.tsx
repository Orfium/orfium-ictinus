import { Elevation, Spacing } from 'index';
import React from 'react';

import { cardStyle } from './Card.style';

export type CardProps = {
  /** Elevation of Card */
  elevated?: keyof Elevation;
  /** Transparency of Card: if false the Card's background is white, otherwise it's transparent */
  isTransparent?: boolean;
  /** Border radius of Card: if not provided it defaults to 0 */
  radius?: keyof Spacing;
};

const Card: React.FC<CardProps> = ({ elevated, isTransparent = false, radius, children }) => {
  return <div css={cardStyle({ elevated, isTransparent, radius })}>{children}</div>;
};

export default Card;
