/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { inputStyle, textFieldStyle, wrapperStyle } from './TextField.style';
import useTheme from 'hooks/useTheme';
import Label from 'components/Label';

export type Props = {
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional icon to show to the left */
  leftIcon?: string | null;
  /** An optional icon to show to the right */
  rightIcon?: string | null;
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
};

const TextField: React.FC<Props> = ({
  rightIcon = null,
  leftIcon = null,
  label,
  placeholder = '',
  required = false,
  error,
  disabled,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <div css={wrapperStyle({ label, error, disabled })(theme)}>
      <div css={textFieldStyle()(theme)}>
        {leftIcon && leftIcon}
        <input
          css={inputStyle({ label, placeholder })(theme)}
          placeholder={!label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label}
          required={required}
          disabled={disabled}
          {...rest}
        />
        {rightIcon && rightIcon}
        {label && <Label label={label} required={required} animateToTop={Boolean(rest.value)} />}
      </div>
    </div>
  );
};

export default TextField;
