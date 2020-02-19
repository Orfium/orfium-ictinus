/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { buttonStyle, buttonSpanStyle } from './Button.style';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import useTheme from 'hooks/useTheme';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** An optional icon to turn the button to icon button with text/children */
  icon?: string | null;
};

const Button: React.FC<Props> = ({
  size = 'md',
  type = 'primary',
  filled = true,
  icon = null,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <button css={buttonStyle({ type, filled, size, icon })(theme)} {...rest}>
      <span css={buttonSpanStyle({ type, filled, size, icon })(theme)}>
        {icon && icon}
        {children}
      </span>
    </button>
  );
};

export default Button;
