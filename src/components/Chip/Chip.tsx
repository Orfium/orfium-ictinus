import React from 'react';
import { colorShades, flatColors } from 'theme/palette';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { iconWrapperStyle, wrapperStyle } from './Chip.style';

export type Props = {
  /**
   * Style of input field
   * @default filled
   */
  styleType?: 'filled' | 'outlined';
  /** This property define the size of the button.
   *  @default md
   * */
  size?: 'md' | 'sm';
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

const Chip: React.FC<Props & TestProps> = ({
  styleType = 'filled',
  size = 'md',
  fill,
  shade,
  leftIcon,
  onLeftIconClick: leftIconHandler,
  rightIcon,
  onRightIconClick: rightIconHandler,
  dataTestId = '',
  children,
}) => {
  return (
    <div
      data-testid={generateTestDataId('chip', dataTestId)}
      css={wrapperStyle({ styleType, size, fill, shade, leftIcon, rightIcon })}
    >
      {leftIcon && (
        <div onClick={leftIconHandler} css={iconWrapperStyle(size, leftIconHandler)}>
          {leftIcon}
        </div>
      )}
      <div>{children}</div>
      {rightIcon && (
        <div onClick={rightIconHandler} css={iconWrapperStyle(size, rightIconHandler)}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Chip;
