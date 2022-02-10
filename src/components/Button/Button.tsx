import { ClickHandler, useLoading } from 'hooks/useLoading';
import React, { useRef } from 'react';
import { ButtonProps } from 'utils/common';
import { TestProps } from 'utils/types';

import ButtonBase, { Props as ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { buttonSpanStyle, childrenWrapperStyle, iconStyle } from './Button.style';
import ButtonLoader from './ButtonLoader';

export type Props = ButtonBaseProps & TestProps & onClickProp;
type onClickProp = { onClick: ClickHandler };

const Button = React.forwardRef<HTMLButtonElement, Props & ButtonProps>((props, ref) => {
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
    onClick,
  } = props;
  const { loading, handleAsyncOperation } = useLoading(onClick);
  const childrenWrapperRef = useRef<HTMLSpanElement>(null);
  const innerButtonWidth = childrenWrapperRef?.current?.clientWidth;

  return (
    <ButtonBase {...props} ref={ref} loading={loading} onClick={handleAsyncOperation}>
      <span css={buttonSpanStyle()}>
        {iconLeft && <span css={iconStyle()}>{iconLeft}</span>}
        <span
          ref={childrenWrapperRef}
          css={childrenWrapperStyle({
            type,
            loading,
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
          {loading ? (
            <ButtonLoader innerButtonWidth={innerButtonWidth} color={color} type={type} />
          ) : (
            children
          )}
        </span>

        {iconRight && <span css={iconStyle()}>{iconRight}</span>}
      </span>
    </ButtonBase>
  );
});
Button.displayName = 'Button';

export default Button;
