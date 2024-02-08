import React from 'react';
import type { BorderRadiusKey } from 'theme/globals/borderRadius';
import type { BoxShadowKey } from 'theme/globals/boxShadow';

import { cardStyle } from './Card.style';

export type CardProps = {
  /** Elevation of Card */
  elevation?: BoxShadowKey;
  /** Transparency of Card: if false the Card's background is white, otherwise it's transparent */
  isTransparent?: boolean;
  /** Border radius of Card: if not provided it defaults to 0 */
  radius?: BorderRadiusKey;
};

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  elevation,
  isTransparent = false,
  radius,
  children,
}) => {
  return <div css={cardStyle({ elevation, isTransparent, radius })}>{children}</div>;
};

export default Card;
