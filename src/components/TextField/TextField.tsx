/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  errorMsgStyle,
  iconWrapperStyle,
  indicatorStyle,
  inputStyle,
  textFieldStyle,
  wrapperStyle,
} from './TextField.style';
import Label from '../Label';
import Icon from '../Icon';
import { formFieldStyles } from 'theme/palette';
import { DEFAULT_SIZE } from '../../utils/size-utils';

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
  /** If the text field has an error message */
  withErrorMsg?: boolean;
  /** If the text field has an indicator */
  withIndicator?: boolean;
  /** Size of the textField */
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
  errorMsg = (
    <React.Fragment>
      <Icon color="error" name="alert" size={12} />
      Error in Text Field
    </React.Fragment>
  ),
  styleType = 'filled',
  success = false,
  withErrorMsg = false,
  withIndicator = false,
  size = DEFAULT_SIZE,
  ...rest
}) => {
  const [input, setInput] = React.useState<string>('');

  const handleLabelAnimation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const shouldUpdate = Boolean(event.target.value) !== Boolean(input);

    // Since we don't care about the actual value,
    // update the component only when the value is change
    // from falsy to truthy and the other way around
    if (shouldUpdate) {
      setInput(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <div css={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div css={wrapperStyle({ disabled, error, lean, styleType })}>
          <div css={textFieldStyle({ size, label, leftIcon })}>
            {leftIcon && <div css={iconWrapperStyle({ rightIcon })}>{leftIcon}</div>}
            <input
              onChange={handleLabelAnimation}
              css={inputStyle({ label, placeholder })}
              placeholder={!label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label}
              required={required}
              id={id}
              disabled={disabled}
              {...rest}
            />
            {label && (
              <Label
                size={size}
                error={error}
                htmlFor={id}
                label={label}
                required={required}
                animateToTop={Boolean(input)}
              />
            )}
            {rightIcon && (
              <div css={iconWrapperStyle({ label, rightIcon, leftIcon })}>{rightIcon}</div>
            )}
          </div>
        </div>
        {withIndicator && (success || error) && (
          <div css={indicatorStyle}>
            <Icon color={error ? 'error' : 'teal'} name={error ? 'alert' : 'success'} size={20} />
          </div>
        )}
      </div>
      {withErrorMsg && error && <div css={errorMsgStyle()}>{errorMsg}</div>}
    </React.Fragment>
  );
};

export default TextField;
