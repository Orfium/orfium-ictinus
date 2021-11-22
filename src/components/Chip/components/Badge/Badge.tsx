import React from 'react';

import { Props } from '../../Chip';
import { badgeStyle } from './Badge.style';

const Badge: React.FC<Props> = ({ fill, isSelected, badgeNumber }) => {
  return <div css={badgeStyle({ fill, isSelected })}>{badgeNumber}</div>;
};

export default Badge;
