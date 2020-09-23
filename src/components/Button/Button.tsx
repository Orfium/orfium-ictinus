/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { EventProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import { buttonSpanStyle, buttonStyle, iconStyle } from './Button.style';

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
  dataTestId?: TestId;
};

const Button: React.FC<Props & TestProps & EventProps> = props => {
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

  return (
    <button
      data-testid={generateTestDataId('button', dataTestId)}
      css={buttonStyle({
        type,
        filled,
        size,
        icon,
        disabled,
        childrenCount: React.Children.count(children),
        iconAlign,
      })}
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
        })}
      >
        {icon && (
          <div
            css={iconStyle({
              type,
              filled,
              size,
              icon,
              disabled,
              hasChildren: Boolean(React.Children.count(children)),
              iconAlign,
            })}
          >
            {icon}
          </div>
        )}
        {children}
      </span>
    </button>
  );
};

export default Button;
