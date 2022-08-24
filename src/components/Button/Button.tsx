import { ClickHandler, useLoading } from 'hooks/useLoading';
import React, { useRef } from 'react';
import { ButtonProps } from 'utils/common';
import { TestProps } from 'utils/types';

import ButtonBase, { Props as ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { buttonSpanStyle, childrenWrapperStyle, iconStyle } from './Button.style';
import ButtonLoader from './ButtonLoader';

type onClickProp = { onClick: ClickHandler };
export type Props = Omit<ButtonBaseProps, 'onClick'> & TestProps & onClickProp & ButtonProps;

const Button: React.FC<Props> = (props) => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    isFilled = true,
    isTransparent = false,
    iconLeft = null,
    iconRight = null,
    isDisabled = false,
    children,
    onClick,
    ref,
  } = props;
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
            type,
            isLoading,
            isFilled,
            size,
            color,
            isTransparent,
            iconLeft,
            iconRight,
            isDisabled,
            hasChildren: Boolean(React.Children.count(children)),
          })}
        >
          {isLoading ? (
            <ButtonLoader innerButtonWidth={innerButtonWidth} color={color} type={type} />
          ) : (
            children
          )}
        </span>

        {iconRight && <span css={iconStyle()}>{iconRight}</span>}
      </span>
    </ButtonBase>
  );
};

Button.displayName = 'Button';

export default React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <Button {...props} ref={ref} />
));
