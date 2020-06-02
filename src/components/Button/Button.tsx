/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { buttonSpanStyle, buttonStyle, iconStyle } from './Button.style';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import useTheme from 'hooks/useTheme';
import { generateTestDataId } from 'utils/helpers';
import { EventProps } from 'utils/common';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** An optional icon to turn the button to icon button with text/children */
  icon?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  disabled?: boolean;
  /** Define the position of the icon - left or right - default to left */
  iconAlign?: 'left' | 'right';
};

export type TestProps = {
  dataTestId?: string;
};

const Button = React.forwardRef<HTMLButtonElement, Props & TestProps & EventProps>((props, ref) => {
  const {
    size = 'md',
    type = 'primary',
    iconAlign = 'left',
    filled = true,
    icon = null,
    disabled = false,
    children,
    dataTestId = '',
    onClick,
    onBlur,
  } = props;
  const theme = useTheme();

  return (
    <button
      ref={ref}
      data-testid={generateTestDataId('button', dataTestId)}
      css={buttonStyle({
        type,
        filled,
        size,
        icon,
        disabled,
        childrenCount: React.Children.count(children),
        iconAlign,
      })(theme)}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
    >
      <span
        css={buttonSpanStyle({
          type,
          filled,
          size,
          icon,
          disabled,
          hasChildren: Boolean(React.Children.count(children)),
          iconAlign,
        })(theme)}
      >
        {icon && (
          <div
            style={iconStyle({
              type,
              filled,
              size,
              icon,
              disabled,
              hasChildren: Boolean(React.Children.count(children)),
              iconAlign,
            })(theme)}
          >
            {icon}
          </div>
        )}
        {children}
      </span>
    </button>
  );
});

export default Button;
