import React from 'react';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { Props } from '../../Chip';
import { badgeStyle } from './Badge.style';

type TestProps = {
  dataTestId?: TestId;
};

const Badge: React.FC<Props & TestProps> = ({ fill, isSelected, badgeNumber, dataTestId }) => {
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
