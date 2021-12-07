import useTheme from 'hooks/useTheme';
import React, { InputHTMLAttributes } from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import Icon from '../Icon';
import Label from '../Label';
import { IconWrapper } from './components/commons';
import { inputStyle } from './TextField.style';
import { AcceptedIconNames } from 'components/Icon/types';
import TextInputBase, { Props as TextInputWrapperProps } from 'components/TextInputBase';

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
    readOnly,
    status,
    ...rest
  } = props;
  const theme = useTheme();

  const getIcon = (icon: AcceptedIconNames | JSX.Element | null) =>
    icon ? (
      typeof icon === 'string' ? (
        <Icon
          name={icon as AcceptedIconNames}
          size={24}
          color={theme.utils.getColor('lightGrey', 650)}
        />
      ) : (
        icon
      )
    ) : null;

  return (
    <React.Fragment>
      <TextInputBase {...props}>
        {leftIcon && <IconWrapper iconPosition={'left'}>{getIcon(leftIcon)}</IconWrapper>}
        <div css={{ width: '100% ' }}>
          <input
            readOnly={readOnly}
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
              error={status === 'error'}
            />
          )}
        </div>
        {rightIcon && !locked && (
          <IconWrapper iconPosition={'right'}>{getIcon(rightIcon)}</IconWrapper>
        )}
        {locked && (
          <IconWrapper iconPosition={'right'}>
            <Icon
              name="lock"
              size={size === 'md' ? 20 : 16}
              color={theme.utils.getColor('lightGrey', 650)}
            />
          </IconWrapper>
        )}
      </TextInputBase>
    </React.Fragment>
  );
});

TextField.displayName = 'TextField';

export default TextField;