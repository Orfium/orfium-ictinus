import useCombinedRefs from 'hooks/useCombinedRefs';
import useTheme from 'hooks/useTheme';
import { omit } from 'lodash';
import React, { InputHTMLAttributes, useMemo } from 'react';
import isEqual from 'react-fast-compare';

import useMultiTextFieldUtils from './hooks/useMultiTextFieldUtils';
import { suffixContainerStyle } from './TextField.style';
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
  isMulti?: boolean;
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

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id = undefined,
    suffix = null,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isReadOnly,
    status,
    onInput,
    // TODO change to isMulti
    isMulti = false,
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

  const isLocked = status?.type === 'read-only';

  const suffixContent = useMemo(() => {
    if (isLocked || typeof suffix === 'string') {
      const iconName = isLocked ? 'lock' : suffix;

      return (
        <Icon
          name={iconName as AcceptedIconNames}
          size={16}
          color={theme.utils.getColor('lightGrey', 650)}
        />
      );
    }

    return suffix;
  }, [isLocked, suffix, theme.utils]);

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
      {isMulti ? (
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
        <TextInputBase {...props}>
          <div css={{ width: '100% ' }}>
            <input
              readOnly={isLocked}
              css={inputStyle({ label, placeholder })}
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
                htmlFor={id}
                label={label}
                isRequired={isRequired}
                isAnimated={Boolean(rest.value)}
                hasError={status?.type === 'error'}
              />
            )}
          </div>
          <div css={suffixContainerStyle()}>{suffixContent}</div>
        </TextInputBase>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

export default React.memo(TextField, isEqual);
