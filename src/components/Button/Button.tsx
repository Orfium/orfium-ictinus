/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { buttonStyle } from './Button.style';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';

export type Props = {
  /** Type indicating the type of the button */
  type: AcceptedColorComponentTypes;
  /** This property define the size of the button. Defaults to 'md' */
  size: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled: boolean;
};

const Button: React.FC<Props> = ({
  size = 'md',
  type = 'primary',
  filled = true,
  children,
  ...rest
}) => (
  <button css={buttonStyle({ type, filled, size })} {...rest}>
    {children}
  </button>
);

export default Button;
