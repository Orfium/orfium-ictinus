/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC, InputHTMLAttributes } from 'react';
import { iconWrapperStyle, inputStyle } from './TextField.style';
import Label from '../Label';
import Icon from '../Icon';
import { DEFAULT_SIZE } from 'utils/size-utils';
import useTheme from 'hooks/useTheme';
import TextInputWrapper, {
  Props as TextInputWrapperProps,
} from 'components/utils/TextInputWrapper/TextInputWrapper';

export type Props = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
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
} & TextInputWrapperProps;

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const TextField = React.forwardRef<HTMLInputElement, Props & InputProps>((props, ref) => {
  const {
    id = undefined,
    rightIcon = null,
    leftIcon = null,
    label,
    placeholder = '',
    required = false,
    disabled,
    locked = false,
    size = DEFAULT_SIZE,
    dark = false,
    lean,
    hintMsg: __hintMsg,
    styleType: __styleType,
    ...rest
  } = props;
  const theme = useTheme();

  const IconWrapper: FC<{ iconPosition: 'left' | 'right' }> = ({ children, iconPosition }) => (
    <div css={iconWrapperStyle({ iconPosition })}>{children}</div>
  );

  return (
    <React.Fragment>
      <TextInputWrapper {...props}>
        {leftIcon && <IconWrapper iconPosition={'left'}>{leftIcon}</IconWrapper>}
        <div css={{ width: '100% ' }}>
          <input
            css={inputStyle({ label, placeholder, size, dark, lean })}
            placeholder={!label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label}
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
        {rightIcon && !locked && <IconWrapper iconPosition={'right'}>{rightIcon}</IconWrapper>}
        {locked && (
          <IconWrapper iconPosition={'right'}>
            <Icon
              name="lock"
              size={size === 'md' ? 20 : 16}
              color={theme.utils.getColor('lightGray', 500)}
            />
          </IconWrapper>
        )}
      </TextInputWrapper>
    </React.Fragment>
  );
});

export default TextField;
