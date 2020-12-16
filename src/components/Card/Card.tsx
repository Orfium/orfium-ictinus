/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Elevation } from 'index';
import React from 'react';
import { cardStyle } from './Card.style';

export type Props = {
  elevated?: keyof Elevation;
};

const Card: React.FC<Props> = ({ elevated, children }) => {
  return <div css={cardStyle({ elevated })}>{children}</div>;
};

export default Card;
