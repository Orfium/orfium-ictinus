import { CSSObject } from '@emotion/serialize';
import React from 'react';

import { ClickEvent } from '../../hooks/useLoading';
import { CommonButtonProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { TestProps } from '../../utils/types';
import { buttonBaseStyle, buttonWrapperStyle } from './ButtonBase.style';
import { ButtonTypes } from 'components/Button/Button.types';
import ButtonLoader from 'components/Button/ButtonLoader';
import Typography from 'components/Typography';

export type EventButtonProps = {
  onClick?: (event: ClickEvent) => void;
  onBlur?: () => void;
};

export type ButtonBaseProps = {
  /** The type of the button */
  type?: ButtonTypes;
  /** This property will make the button fit to its parent width. Defaults to false */
  isBlock?: boolean;
  /** Property indicating if the component is loading */
  isLoading?: boolean;
  /** Define if the button is in disabled state */
  isDisabled?: boolean;
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
    isBlock = false,
    isDisabled = false,
    isLoading = false,
    children,
    dataTestId = '',
    dataTestPrefixId = '',
    htmlType = 'button',
    onClick,
    onBlur,
    sx,
  } = props;
  const testIdName = `${dataTestPrefixId}button`;

  return (
    <div css={buttonWrapperStyle({ isBlock })}>
      {isLoading && !isDisabled && <ButtonLoader type={type} dataTestId={testIdName} />}
      <button
        ref={ref}
        type={htmlType}
        data-testid={generateTestDataId(testIdName, dataTestId)}
        css={buttonBaseStyle({
          type,
          isLoading,
          isBlock,
          isDisabled,
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
        <Typography type="label02">{children}</Typography>
      </button>
    </div>
  );
});

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
