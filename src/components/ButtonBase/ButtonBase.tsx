import type { CSSObject } from '@emotion/serialize';
import type { ClickEvent } from 'hooks/useLoading';
import { omit } from 'lodash-es';
import React from 'react';
import type { CommonButtonProps } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';
import type { ComponentSizes, TestProps } from 'utils/types';

import { buttonBaseStyle, buttonWrapperStyle } from './ButtonBase.style';
import type { ButtonTypes } from 'components/Button/Button.types';
import ButtonLoader from 'components/Button/ButtonLoader';
import type { IconButtonShape } from 'components/IconButton';

export type EventButtonProps = {
  onClick?: (event: ClickEvent) => void;
  onBlur?: () => void;
};

export type ButtonBaseProps = {
  /** The type of the button */
  type?: ButtonTypes;
  /** The size of button */
  size?: ComponentSizes;
  /** This property will make the button fit to its parent width. Defaults to false */
  isBlock?: boolean;
  /** Property indicating if the component is loading */
  isLoading?: boolean;
  /** Define if the button is in disabled state */
  isDisabled?: boolean;
  /** Define if the button is an icon button */
  isIconButton?: boolean;
  /** Define the radius type of the icon button */
  shape?: IconButtonShape;
  /** Defines the button type */
  htmlType?: 'submit' | 'reset' | 'button';
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
    type = 'primary',
    size = 'normal',
    isBlock = false,
    isDisabled = false,
    isLoading = false,
    isIconButton = false,
    shape = 'circle',
    children,
    dataTestId = '',
    dataTestPrefixId = '',
    htmlType = 'button',
    onClick,
    onBlur,
    sx,
    ...rest
  } = props;
  const testIdName = `${dataTestPrefixId}button`;

  return (
    <div css={buttonWrapperStyle({ isBlock })}>
      {isLoading && !isDisabled && <ButtonLoader dataTestId={testIdName} />}
      <button
        {...omit(rest, ['avatar', 'iconRightName', 'iconLeftName', 'iconName'])}
        ref={ref}
        type={htmlType}
        data-testid={generateTestDataId(testIdName, dataTestId)}
        css={buttonBaseStyle({
          type,
          size,
          isLoading,
          isBlock,
          isDisabled,
          isIconButton,
          shape,
          sx,
        })}
        onClick={(event) => {
          if (onClick) {
            onClick(event);
          }
        }}
        onBlur={onBlur}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
});

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
