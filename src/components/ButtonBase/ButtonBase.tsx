import { CSSObject } from '@emotion/serialize';
import React from 'react';

import { buttonBaseStyle, buttonWrapperStyle } from './ButtonBase.style';
import { ClickEvent } from '../../hooks/useLoading';
import { CommonButtonProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { TestProps } from '../../utils/types';
import { ButtonTypes } from 'components/Button/Button.types';
import ButtonLoader from 'components/Button/ButtonLoader';
import { IconButtonShape } from 'components/IconButton';
import Typography, { TextColorTypes } from 'components/Typography';

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
  } = props;
  const testIdName = `${dataTestPrefixId}button`;

  const getTextType = (type: ButtonTypes): TextColorTypes => {
    if (type === 'tertiary') {
      return 'secondary';
    }
    if (type === 'danger') {
      return 'error';
    }

    return type as TextColorTypes;
  };

  return (
    <div css={buttonWrapperStyle({ isBlock })}>
      {isLoading && !isDisabled && <ButtonLoader dataTestId={testIdName} />}
      <button
        ref={ref}
        type={htmlType}
        data-testid={generateTestDataId(testIdName, dataTestId)}
        css={buttonBaseStyle({
          type,
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
