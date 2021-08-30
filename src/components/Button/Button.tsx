import { useLoading } from 'hooks/useLoading';
import React, { useRef } from 'react';
import { ButtonProps, EventProps } from 'utils/common';
import { TestProps } from 'utils/types';

import ButtonBase, { Props as ButtonBaseProps } from '../ButtonBase/ButtonBase';
import {
  buttonSpanStyle,
  childrenWrapperStyle,
  iconStyle,
  centralizedLoader,
} from './Button.style';
import Loader from 'components/Loader';

export type Props = ButtonBaseProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & Props & TestProps & EventProps>(
  (props, ref) => {
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
              <div css={centralizedLoader(innerButtonWidth)}>
                <Loader type={'spinner'} />
              </div>
            ) : (
              children
            )}
          </span>

          {iconRight && <span css={iconStyle()}>{iconRight}</span>}
        </span>
      </ButtonBase>
    );
  }
);
Button.displayName = 'Button';

export default Button;
