import React, { MouseEvent } from 'react';
import { ReactFCC } from 'utils/types';

import { iconWrapperStyle } from '../TextField.style';

export const IconWrapper: ReactFCC<{
  iconPosition: 'left' | 'right';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}> = ({ children, iconPosition, onClick }) => (
  <div onClick={onClick} css={iconWrapperStyle({ iconPosition, isClickable: Boolean(onClick) })}>
    {children}
  </div>
);
