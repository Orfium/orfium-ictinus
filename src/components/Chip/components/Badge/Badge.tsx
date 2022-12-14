import React from 'react';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { ChipProps } from '../../Chip.types';
import { badgeStyle } from './Badge.style';

type TestProps = {
  dataTestId?: TestId;
};

export type BadgeProps = Pick<ChipProps, 'fill' | 'isSelected' | 'badgeNumber'> & TestProps;

const Badge: React.FC<BadgeProps> = ({ fill, isSelected, badgeNumber, dataTestId }) => {
  return (
    <div
      data-testid={generateTestDataId('badge', dataTestId)}
      css={badgeStyle({ fill, isSelected })}
    >
      {badgeNumber}
    </div>
  );
};

export default Badge;
