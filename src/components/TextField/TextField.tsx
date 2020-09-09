/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import Label from '../Label';
import { iconWrapperStyle, inputStyle, textFieldStyle, wrapperStyle } from './TextField.style';

export type Props = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional icon to show to the left */
  leftIcon?: string | JSX.Element | null;
  /** An optional icon to show to the right */
  rightIcon?: string | JSX.Element | null;
  /** If the text field value is required */
  required?: boolean;
  /** If the text field is disabled */
  disabled?: boolean;
  /** If the text field has errors */
  error?: boolean;
  /** value of the input */
  value?: string | number;
  /** type of the input */
  type?: string;
  /** if the input will be without default style for use inside the library */
  lean?: boolean;
};

const TextField: React.FC<Props> = ({
  id = undefined,
  rightIcon = null,
  leftIcon = null,
  label,
  placeholder = '',
  required = false,
  lean = false,
  error,
  disabled,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <div css={wrapperStyle({ error, disabled, lean })(theme)}>
      <div css={textFieldStyle({ label, leftIcon })(theme)}>
        {leftIcon && <div css={iconWrapperStyle({ label, rightIcon })(theme)}>{leftIcon}</div>}
        <input
          css={inputStyle({ label, placeholder })(theme)}
          placeholder={!label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label}
          required={required}
          id={id}
          disabled={disabled}
          {...rest}
        />
        {label && (
          <Label
            htmlFor={id}
            label={label}
            required={required}
            animateToTop={Boolean(rest.value)}
          />
        )}
        {rightIcon && (
          <div css={iconWrapperStyle({ label, rightIcon, leftIcon })(theme)}>{rightIcon}</div>
        )}
      </div>
    </div>
  );
};

export default TextField;
