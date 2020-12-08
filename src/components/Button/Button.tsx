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
  /** An optional icon to put on the right of the button */
  iconRight?: React.Component | JSX.Element | null;
  /** An optional icon to put on the left of the button */
  iconLeft?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  disabled?: boolean;
};

export type TestProps = {
  dataTestId?: TestId;
};

const Button: React.FC<Props & TestProps & EventProps> = props => {
  const {
    size = 'md',
    type = 'primary',
    filled = true,
    iconLeft = null,
    iconRight = null,
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
        icon: Boolean(iconLeft || iconRight),
        disabled,
        iconLeft,
        iconRight,
        childrenCount: React.Children.count(children),
      })}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
    >
      <span css={buttonSpanStyle()}>
        {iconLeft && (
          <span
            css={iconStyle({
              type,
              filled,
              size,
              iconLeft,
              iconRight,
              disabled,
              hasChildren: Boolean(React.Children.count(children)),
            })}
          >
            {iconLeft}
          </span>
        )}
        {children}

        {iconRight && (
          <span
            css={iconStyle({
              type,
              filled,
              size,
              iconLeft,
              iconRight,
              disabled,
              hasChildren: Boolean(React.Children.count(children)),
            })}
          >
            {iconRight}
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
