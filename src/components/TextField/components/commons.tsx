import React, { FCC, MouseEvent } from 'react';

import { iconWrapperStyle } from '../TextField.style';

export const IconWrapper: FCC<{
  iconPosition: 'left' | 'right';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}> = ({ children, iconPosition, onClick }) => (
  <div onClick={onClick} css={iconWrapperStyle({ iconPosition, isClickable: Boolean(onClick) })}>
    {children}
  </div>
);
