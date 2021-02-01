/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC, InputHTMLAttributes } from 'react';

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
import useTheme from '../../hooks/useTheme';

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
  /** If the text field is locked. Locked state is unique to this and the system */
  locked?: boolean;
  /** dark mode of the text field */
  dark?: boolean;
  /** Error message */
  hintMsg?: React.ReactNode | string;
  /** value of the input */
  value?: string | number;
  /** if the input will be without default style for use inside the library */
  lean?: boolean;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** Sets the size of the textField */
  size?: 'md' | 'sm';
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
  /** Callback fired when the `input` is blurred. */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Callback fired when the `input` is changed. */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** Callback fired when the `input` is focused. */
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Callback fired when the `input` has a key down event. */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** Callback fired when the `input` value typed is changed */
  onInput?: React.EventHandler<any>;
};

const TextField = React.forwardRef<HTMLInputElement, Props & InputHTMLAttributes<HTMLInputElement>>(
  (
    {
      id = undefined,
      rightIcon = null,
      leftIcon = null,
      label,
      placeholder = '',
      required = false,
      lean = false,
      disabled,
      hintMsg,
      styleType = 'filled',
      status = 'normal',
      locked = false,
      size = DEFAULT_SIZE,
      dark = false,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const hintMessageToShow = hintMsg && (
      <React.Fragment>
        <Icon
          color={status === 'error' ? 'error' : theme.utils.getColor('lightGray', 600)}
          name={status === 'error' ? 'issues' : 'info'}
          size={12}
        />
        {hintMsg}
      </React.Fragment>
    );

    const IconWrapper: FC<{ iconPosition: 'left' | 'right' }> = ({ children, iconPosition }) => (
      <div css={iconWrapperStyle({ iconPosition })}>{children}</div>
    );

    return (
      <React.Fragment>
        <div css={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div css={wrapperStyle({ dark, locked, disabled, status, lean, styleType })}>
            <div css={textFieldStyle({ size, label, leftIcon })}>
              {leftIcon && <IconWrapper iconPosition={'left'}>{leftIcon}</IconWrapper>}
              <div css={{ width: '100% ' }}>
                <input
                  css={inputStyle({ label, placeholder, size, dark })}
                  placeholder={
                    !label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label
                  }
                  required={required}
                  id={id}
                  disabled={disabled || locked}
                  {...rest}
                  ref={ref}
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
              {rightIcon && !locked && (
                <IconWrapper iconPosition={'right'}>{rightIcon}</IconWrapper>
              )}
              {locked && (
                <IconWrapper iconPosition={'right'}>
                  <Icon
                    name="lock"
                    size={size === 'md' ? 20 : 16}
                    color={theme.utils.getColor('lightGray', 500)}
                  />
                </IconWrapper>
              )}
            </div>
          </div>
        </div>
        {hintMsg && status !== 'normal' && (
          <div css={errorMsgStyle({ status })}>{hintMessageToShow}</div>
        )}
      </React.Fragment>
    );
  }
);

export default TextField;
