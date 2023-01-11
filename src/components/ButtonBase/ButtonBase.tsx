import { CSSObject } from '@emotion/serialize';
import React from 'react';

import { ClickEvent } from '../../hooks/useLoading';
import { CommonButtonProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { TestProps } from '../../utils/types';
import { buttonBaseStyle } from './ButtonBase.style';

export type EventButtonProps = {
  onClick?: (event: ClickEvent) => void;
  onBlur?: () => void;
};

export type ButtonBaseProps = {
  /** This property will make the button fit to its parent width. Defaults to false */
  isBlock?: boolean;
  /** Property indicating if the component is async and loading */
  isLoading?: boolean;
  /** An optional icon to put on the right of the button */
  iconRight?: React.Component | JSX.Element | null;
  /** An optional icon to put on the left of the button */
  iconLeft?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  isDisabled?: boolean;
  /** Defines the button type */
  buttonType?: 'submit' | 'reset' | 'button';
  /** Sx prop to override specific properties */
  sx?: {
    container?: CSSObject;
  };
} & TestProps &
  EventButtonProps &
  CommonButtonProps;

//@TODO fix props to not overwrite button props
const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const {
    isBlock = false,
    iconLeft = null,
    iconRight = null,
    isDisabled = false,
    isLoading = false,
    children,
    dataTestId = '',
    dataTestPrefixId = '',
    buttonType = 'button',
    onClick,
    onBlur,
    sx,
  } = props;
  const color = '#123455';
  const testIdName = `${dataTestPrefixId}button`;

  return (
    <button
      ref={ref}
      type={buttonType}
      data-testid={generateTestDataId(testIdName, dataTestId)}
      css={buttonBaseStyle({
        isLoading,
        isBlock,
        color,
        isDisabled,
        iconLeft,
        iconRight,
        sx,
        childrenCount: React.Children.count(children),
      })}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      onBlur={onBlur}
      disabled={isDisabled || isLoading}
    >
      {children}
    </button>
  );
});

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
