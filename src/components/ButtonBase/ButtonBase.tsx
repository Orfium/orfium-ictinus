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
  block?: boolean;
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** Property indicating if the component is async and loading */
  loading?: boolean;
  /** Property indicating if the component is transparent with a color based on the type */
  transparent?: boolean;
  /** An optional boolean to show if the button is icon */
  isIconButton?: boolean;
  /** An optional icon to put on the right of the button */
  iconRight?: React.Component | JSX.Element | null;
  /** An optional icon to put on the left of the button */
  iconLeft?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  disabled?: boolean;
  /** Defines the button type */
  buttonType?: 'submit' | 'reset' | 'button';
};

//@TODO fix props to not overwrite button props
const ButtonBase = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & Props & TestProps & EventButtonProps
>((props, ref) => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    block = false,
    filled = true,
    transparent = false,
    isIconButton = false,
    iconLeft = null,
    iconRight = null,
    disabled = false,
    loading = false,
    children,
    dataTestId = '',
    buttonType = 'button',
    onClick,
    onBlur,
  } = props;
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);
  const testIdName = `${isIconButton ? 'icon-' : ''}button`;

  return (
    <button
      ref={ref}
      type={buttonType}
      data-testid={generateTestDataId(testIdName, dataTestId)}
      css={buttonBaseStyle({
        type,
        loading,
        filled,
        size,
        block,
        color,
        transparent,
        calculatedColor,
        isIconButton,
        disabled,
        iconLeft,
        iconRight,
        childrenCount: React.Children.count(children),
      })}
      onClick={event => {
        if (onClick) {
          onClick(event);
        }
      }}
      onBlur={onBlur}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
});
ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
