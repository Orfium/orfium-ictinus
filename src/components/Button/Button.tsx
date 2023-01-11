import { ClickHandler, useLoading } from 'hooks/useLoading';
import React, { useRef } from 'react';
import { CommonButtonProps } from 'utils/common';
import { TestProps } from 'utils/types';

import ButtonBase, { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { buttonSpanStyle, childrenWrapperStyle, iconStyle } from './Button.style';
import ButtonLoader from './ButtonLoader';

export type onClickProp = { onClick: ClickHandler };
export type ButtonProps = Omit<ButtonBaseProps, 'onClick'> &
  TestProps &
  onClickProp &
  CommonButtonProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { iconLeft = null, iconRight = null, isDisabled = false, children, onClick } = props;
  const { isLoading, handleAsyncOperation } = useLoading(onClick);
  const childrenWrapperRef = useRef<HTMLSpanElement>(null);
  const innerButtonWidth = childrenWrapperRef?.current?.clientWidth;

  return (
    <ButtonBase {...props} ref={ref} isLoading={isLoading} onClick={handleAsyncOperation}>
      <span css={buttonSpanStyle()}>
        {iconLeft && <span css={iconStyle()}>{iconLeft}</span>}
        <span
          ref={childrenWrapperRef}
          css={childrenWrapperStyle({
            isLoading,
            iconLeft,
            iconRight,
            isDisabled,
            hasChildren: Boolean(React.Children.count(children)),
          })}
        >
          {isLoading ? <ButtonLoader innerButtonWidth={innerButtonWidth} /> : children}
        </span>

        {iconRight && <span css={iconStyle()}>{iconRight}</span>}
      </span>
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;
