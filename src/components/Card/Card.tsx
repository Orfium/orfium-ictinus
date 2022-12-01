import { Elevation } from 'index';
import React from 'react';
import { SpacingKey } from 'theme/spacing';

import { cardStyle } from './Card.style';

export type Props = {
  /** Elevation of Card */
  elevated?: keyof Elevation;
  /** Transparency of Card: if false the Card's background is white, otherwise it's transparent */
  isTransparent?: boolean;
  /** Border radius of Card: if not provided it defaults to 0 */
  radius?: SpacingKey;
};

const Card: React.FC<Props> = ({ elevated, isTransparent = false, radius, children }) => {
  return <div css={cardStyle({ elevated, isTransparent, radius })}>{children}</div>;
};

export default Card;
