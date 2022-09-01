import { CSSObject } from '@emotion/serialize';
import React from 'react';

import { ClickEvent } from '../../hooks/useLoading';
import { useTypeColorToColorMatch } from '../../hooks/useTypeColorToColorMatch';
import { ButtonProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestProps } from '../../utils/types';
import { buttonBaseStyle } from './ButtonBase.style';
import { buttonSizes } from './config';

export type EventButtonProps = {
  onClick?: (event: ClickEvent) => void;
  onBlur?: () => void;
};

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** the color of the button based on our colors eg. red-500 */
  color?: string;
  /** This property define the size of the button. Defaults to 'md' */
  size?: typeof buttonSizes[number];
  /** This property will make the button fit to its parent width. Defaults to false */
  isBlock?: boolean;
  /** Property indicating if the component is filled with a color based on the type */
  isFilled?: boolean;
  /** Property indicating if the component is async and loading */
  isLoading?: boolean;
  /** Property indicating if the component is transparent with a color based on the type */
  isTransparent?: boolean;
  /** An optional boolean to show if the button is icon */
  isIconButton?: boolean;
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
  ButtonProps;

//@TODO fix props to not overwrite button props
const ButtonBase = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    isBlock = false,
    isFilled = true,
    isTransparent = false,
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
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);
  const testIdName = `${dataTestPrefixId}button`;

  return (
    <button
      ref={ref}
      type={buttonType}
      data-testid={generateTestDataId(testIdName, dataTestId)}
      css={buttonBaseStyle({
        type,
        isLoading,
        isFilled,
        size,
        isBlock,
        color,
        isTransparent,
        calculatedColor,
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
