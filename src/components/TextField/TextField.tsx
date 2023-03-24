import useTheme from 'hooks/useTheme';
import { omit } from 'lodash';
import React, { InputHTMLAttributes } from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { IconWrapper } from './components/commons';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import Label from '../Label';
import { AcceptedIconNames } from 'components/Icon/types';
import TextInputBase, { TextInputBaseProps } from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type InputProps = Partial<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'readOnly' | 'disabled'>
>;

export type TextFieldProps = {
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
  /** Boolean to make the input readonly. Default to false. */
  isReadOnly?: boolean;
  /** @deprecated This is a compatibility prop that will be removed in the next version, along with the min-width value
   * of the TextField. It will be replaced by a fullWidth prop. */
  hasMinWidthCompat?: boolean;
} & TextInputBaseProps &
  InputProps &
  TestProps;

console.warn(
  'Deprecation warning! min-width will be removed from the component in v5 of ictinus. ' +
    'hasMinWidthCompat prop has been added to temporarily disable min-width when necessary'
);

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id = undefined,
    rightIcon = null,
    leftIcon = null,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isLocked = false,
    size = DEFAULT_SIZE,
    isDark = false,
    isLean,
    hintMsg: __hintMsg,
    styleType: __styleType,
    isReadOnly,
    status,
    hasMinWidthCompat = true,
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
      <TextInputBase {...props} hasMinWidthCompat={hasMinWidthCompat}>
        {leftIcon && <IconWrapper iconPosition={'left'}>{getIcon(leftIcon)}</IconWrapper>}
        <div css={{ width: '100% ' }}>
          <input
            readOnly={isReadOnly}
            css={inputStyle({ label, placeholder, size, isDark, isLean })}
            placeholder={!label && placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
            required={isRequired}
            id={id}
            disabled={isDisabled || isLocked}
            {...omit(rest, 'dataTestId')}
            ref={ref}
          />
          {label && (
            <Label
              size={size}
              htmlFor={id}
              label={label}
              isRequired={isRequired}
              isAnimated={Boolean(rest.value)}
              hasError={status === 'error'}
            />
          )}
        </div>
        {rightIcon && !isLocked && (
          <IconWrapper iconPosition={'right'}>{getIcon(rightIcon)}</IconWrapper>
        )}
        {isLocked && (
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
