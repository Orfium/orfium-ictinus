import React from 'react';
import { colorShades, flatColors } from 'theme/palette';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { DivProps } from '../../utils/common';
import { iconWrapperStyle, wrapperStyle } from './Chip.style';

export type Props = {
  /**
   * Style of input field
   * @default filled
   */
  styleType?: 'filled' | 'outlined';
  /** Defines the fill color of the component, if filled */
  fill?: typeof flatColors[number];
  /** Defines the shade of the fill */
  shade?: typeof colorShades[number];
  /** An optional icon to show to the left */
  leftIcon?: JSX.Element;
  /** */
  onLeftIconClick?: React.ReactEventHandler;
  /** An optional icon to show to the right */
  rightIcon?: JSX.Element;
  /** */
  onRightIconClick?: React.ReactEventHandler;
  /**  */
};

type TestProps = {
  dataTestId?: TestId;
};

const Chip = React.forwardRef<HTMLDivElement, Props & TestProps & DivProps>(
  (
    {
      styleType = 'filled',
      fill,
      shade,
      leftIcon,
      onLeftIconClick: leftIconHandler,
      rightIcon,
      onRightIconClick: rightIconHandler,
      dataTestId = '',
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-testid={generateTestDataId('chip', dataTestId)}
        css={wrapperStyle({ styleType, fill, shade, leftIcon, rightIcon })}
      >
        {leftIcon && (
          <div onClick={leftIconHandler} css={iconWrapperStyle(leftIconHandler)}>
            {leftIcon}
          </div>
        )}
        <div>{children}</div>
        {rightIcon && (
          <div onClick={rightIconHandler} css={iconWrapperStyle(rightIconHandler)}>
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
