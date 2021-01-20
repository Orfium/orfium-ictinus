/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  errorMsgStyle,
  iconWrapperStyle,
  inputStyle,
  textFieldStyle,
  wrapperStyle,
} from './TextField.style';
import Label from '../Label';
import Icon from '../Icon';
import { formFieldStyles } from 'theme/palette';
import { DEFAULT_SIZE } from '../../utils/size-utils';
import { FC } from 'react';

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
  /** Error message */
  errorMsg?: React.ReactNode | string;
  /** value of the input */
  value?: string | number;
  /** if the input will be without default style for use inside the library */
  lean?: boolean;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** If the text field status is success */
  success?: boolean;
  /** Sets the size of the textField */
  size?: 'md' | 'sm';
};

const TextField: React.FC<Props> = ({
  id = undefined,
  rightIcon = null,
  leftIcon = null,
  label,
  placeholder = '',
  required = false,
  lean = false,
  error = false,
  disabled,
  errorMsg,
  styleType = 'filled',
  success = false,
  size = DEFAULT_SIZE,
  ...rest
}) => {
  const errorMessageToShow = errorMsg && (
    <React.Fragment>
      <Icon color="error" name="issues" size={12} />
      {errorMsg}
    </React.Fragment>
  );

  const IconWrapper: FC = ({ children }) => (
    <div css={iconWrapperStyle({ rightIcon })}>{children}</div>
  );

  return (
    <React.Fragment>
      <div css={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div css={wrapperStyle({ disabled, error, lean, styleType })}>
          <div css={textFieldStyle({ size, label, leftIcon })}>
            {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
            <div>
              <input
                css={inputStyle({ label, placeholder, size })}
                placeholder={
                  !label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label
                }
                required={required}
                id={id}
                disabled={disabled}
                {...rest}
              />
              {label && (
                <Label
                  size={size}
                  htmlFor={id}
                  label={label}
                  required={required}
                  animateToTop={Boolean(rest.value)}
                />
              )}
            </div>
            {rightIcon && (
              <div css={iconWrapperStyle({ label, rightIcon, leftIcon })}>{rightIcon}</div>
            )}
          </div>
        </div>
      </div>
      {errorMsg && error && <div css={errorMsgStyle()}>{errorMessageToShow}</div>}
    </React.Fragment>
  );
};

export default TextField;
