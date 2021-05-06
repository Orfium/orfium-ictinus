/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Elevation, Spacing } from 'index';
import React from 'react';
import { cardStyle } from './Card.style';

export type Props = {
  elevated?: keyof Elevation;
  transparent?: boolean;
  radius?: keyof Spacing;
};

const Card: React.FC<Props> = ({ elevated, transparent = false, radius, children }) => {
  return <div css={cardStyle({ elevated, transparent, radius })}>{children}</div>;
};

export default Card;
