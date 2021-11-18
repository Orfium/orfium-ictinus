import React from 'react';
import { flatColors } from 'theme/palette';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { BASE_SHADE } from '../../theme/palette';
import { DivProps } from '../../utils/common';
import { iconWrapperStyle, chipStyle } from './Chip.style';
import Avatar from 'components/Avatar';

export type Props = {
  /** Defines the fill color of the component, if filled */
  fill?: typeof flatColors[number];
  /** An optional thumbnail to show to the left */
  thumbnail?: { src?: string; name?: string };
  /** An optional icon to show to the left */
  leftIcon?: JSX.Element;
  /** An optional icon to show to the right */
  rightIcon?: JSX.Element;
  /**  */
};

type TestProps = {
  dataTestId?: TestId;
};

const Chip = React.forwardRef<HTMLDivElement, Props & TestProps & DivProps>(
  ({ fill, thumbnail, leftIcon, rightIcon, dataTestId = '', children }, ref) => {
    return (
      <div
        ref={ref}
        data-testid={generateTestDataId('chip', dataTestId)}
        css={chipStyle({ fill, leftIcon, rightIcon })}
      >
        {thumbnail && (
          <div style={{ marginRight: '4px' }}>
            <Avatar size={'xxxs'} color={`${fill}-${BASE_SHADE}`} src={thumbnail.src}>
              {thumbnail.name}
            </Avatar>
          </div>
        )}
        {leftIcon && <div css={iconWrapperStyle()}>{leftIcon}</div>}
        <div>{children}</div>
        {rightIcon && <div css={iconWrapperStyle()}>{rightIcon}</div>}
      </div>
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
