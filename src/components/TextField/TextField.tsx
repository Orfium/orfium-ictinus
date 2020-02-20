/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { wrapperStyle, textFieldStyle, inputStyle, labelStyle } from './TextField.style';
import useTheme from 'hooks/useTheme';

export type Props = {
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional icon to show to the left */
  leftIcon?: string | null;
  /** An optional icon to show to the right */
  rightIcon?: string | null;
};

const TextField: React.FC<Props> = ({
  rightIcon = null,
  leftIcon = null,
  label,
  placeholder = '',
  ...rest
}) => {
  const theme = useTheme();

  return (
    <div css={wrapperStyle({ label })(theme)}>
      <div css={textFieldStyle()(theme)}>
        {leftIcon && leftIcon}
        <input
          css={inputStyle({ label, placeholder })(theme)}
          placeholder={!label && placeholder ? placeholder : label}
          {...rest}
        />
        {rightIcon && rightIcon}
        {label && <label css={labelStyle()(theme)}>{label}</label>}
      </div>
    </div>
  );
};

export default TextField;
