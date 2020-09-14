/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
  iconWrapperStyle,
  indicatorStyle,
  inputStyle,
  textFieldStyle,
  wrapperStyle,
} from './TextField.style';
import useTheme from 'hooks/useTheme';
import Label from 'components/Label';
import Icon from 'components/Icon';

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
  /** If the text field status is success */
  success?: boolean;
  /** If the text field has an indicator */
  withIndicator?: boolean;
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
  success = false,
  withIndicator = false,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <div css={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
      {withIndicator && (success || error) && (
        <div css={indicatorStyle}>
          <Icon color={error ? 'error' : 'teal'} name={error ? 'error' : 'success'} size={20} />
        </div>
      )}
    </div>
  );
};

export default TextField;
