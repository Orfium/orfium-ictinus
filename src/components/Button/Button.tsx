import { ClickHandler, useLoading } from 'hooks/useLoading';
import React, { useRef } from 'react';
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
type onClickProp = { onClick: ClickHandler };

const Button: React.FC<Props & TestProps & onClickProp> = props => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    filled = true,
    transparent = false,
    iconLeft = null,
    iconRight = null,
    disabled = false,
    buttonType,
    children,
    onClick,
  } = props;
  const { loading, handleAsyncOperation } = useLoading(onClick);
  const childrenWrapperRef = useRef<HTMLSpanElement>(null);
  const innerButtonWidth = childrenWrapperRef?.current?.clientWidth;

  return (
    <ButtonBase buttonType={buttonType} {...props} loading={loading} onClick={handleAsyncOperation}>
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
};

export default Button;
