import useCombinedRefs from 'hooks/useCombinedRefs';
import useTheme from 'hooks/useTheme';
import { omit } from 'lodash';
import React, { InputHTMLAttributes } from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { IconWrapper } from './components/commons';
import useMultiTextFieldUtils from './hooks/useMultiTextFieldUtils';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import Label from '../Label';
import { AcceptedIconNames } from 'components/Icon/types';
import MultiTextFieldBase from 'components/MultiTextFieldBase/MultiTextFieldBase';
import { SelectOption } from 'components/Select/Select';
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
  /** If true the user can enter multiple values by pressing 'Enter' */
  multi?: boolean;
  /** The initial multi values */
  multiValues?: string[];
  /** Maximum multi values */
  maxMultiValues?: number;
  /** A callback for when a Chip value is created */
  onMultiValueCreate?: (value?: string) => void;
  /** A callback for when a Chip value is deleted */
  onMultiValueDelete?: (value?: string) => void;
  /** A callback for when all values are deleted (the Clear All icon is clicked) */
  onClearAllValues?: () => void;
  /** The handler of multi values. If you pass a different handler function here it will change the way multi values are being calculated */
  multiValuesHandler?: (tags: string) => string | string[];
} & TextInputBaseProps &
  InputProps &
  TestProps;

console.warn(
  'Deprecation warning! min-width will be removed from the component in v5 of ictinus. ' +
    'hasMinWidthCompat prop has been added to temporarily disable min-width when necessary'
);

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
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
      onInput,
      // TODO change to isMulti
      multi = false,
      multiValues = [],
      maxMultiValues,
      onMultiValueCreate,
      onMultiValueDelete,
      onClearAllValues,
      multiValuesHandler = (value) => value,
      ...rest
    } = props;
    const theme = useTheme();

    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRefs = useCombinedRefs(inputRef, ref);

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

    const handleClick = () => {
      if (!isLocked && !isDisabled) {
        combinedRefs.current?.focus();
      }
    };

    const {
      inputValue,
      values,
      handleValueDelete,
      handleClearAllValues,
      handleKeyDown,
      handleTyping,
    } = useMultiTextFieldUtils({
      multiValues,
      maxMultiValues,
      onMultiValueCreate,
      onMultiValueDelete,
      onClearAllValues,
      onInput,
      multiValuesHandler,
    });

    return (
      <div onClick={handleClick}>
        {multi ? (
          <MultiTextFieldBase
            {...props}
            isTextfield
            onOptionDelete={handleValueDelete as (option?: string | SelectOption) => void}
            onClearAllOptions={handleClearAllValues}
            label={label}
            onInput={handleTyping}
            onKeyDown={handleKeyDown}
            selectedOptions={values}
            value={inputValue}
            ref={combinedRefs}
          />
        ) : (
          <TextInputBase {...props} hasMinWidthCompat={hasMinWidthCompat}>
            {leftIcon && <IconWrapper iconPosition={'left'}>{getIcon(leftIcon)}</IconWrapper>}
            <div css={{ width: '100% ' }}>
              <input
                readOnly={isReadOnly}
                css={inputStyle({ label, placeholder, size, isDark, isLean, isDisabled, isLocked })}
                placeholder={
                  !label && placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label
                }
                required={isRequired}
                id={id}
                disabled={isDisabled || isLocked}
                onInput={onInput}
                {...omit(rest, 'dataTestId')}
                ref={combinedRefs}
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
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
