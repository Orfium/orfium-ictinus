import React, { FC, MouseEvent } from 'react';

import { iconWrapperStyle } from './TextField.style';

export const IconWrapper: FC<{
  iconPosition: 'left' | 'right';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}> = ({ children, iconPosition, onClick }) => (
  <div onClick={onClick} css={iconWrapperStyle({ iconPosition })}>
    {children}
  </div>
);
