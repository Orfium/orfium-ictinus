import * as React from 'react';

import { EventProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import ButtonBase, { Props as ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { buttonSpanStyle, childrenWrapperStyle, iconStyle } from './Button.style';

export type Props = ButtonBaseProps;

const Button: React.FC<Props & TestProps & EventProps> = props => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    filled = true,
    transparent = false,
    iconLeft = null,
    iconRight = null,
    disabled = false,
    children,
  } = props;

  return (
    <ButtonBase {...props}>
      <span css={buttonSpanStyle()}>
        {iconLeft && <span css={iconStyle()}>{iconLeft}</span>}
        <span
          css={childrenWrapperStyle({
            type,
            filled,
            size,
            color,
            transparent,
            iconLeft,
            iconRight,
            disabled,
            hasChildren: Boolean(React.Children.count(children)),
          })}
        >
          {children}
        </span>

        {iconRight && <span css={iconStyle()}>{iconRight}</span>}
      </span>
    </ButtonBase>
  );
};

export default Button;
