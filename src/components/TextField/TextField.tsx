import useCombinedRefs from 'hooks/useCombinedRefs';
import useTheme from 'hooks/useTheme';
import { omit } from 'lodash';
import React, { InputHTMLAttributes, useMemo, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { generateUniqueID } from 'utils/helpers';

import { suffixContainerStyle } from './TextField.style';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import Label from '../Label';
import { getTextInputBaseTokens } from '../TextInputBase/TextInputBase.tokens';
import { AcceptedIconNames } from 'components/Icon/types';
import MultiTextFieldBase from 'components/MultiTextFieldBase/MultiTextFieldBase';
import { SelectOption } from 'components/Select';
import TextInputBase, { TextInputBaseProps } from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type InputProps = Partial<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled'>
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
  /** [For MultiTextField] If true, the user can add multiple tags as an input */
  isMulti?: boolean;
  /** [For MultiTextField] The values of the tags (chips) */
  tags?: string[];
  /** [For MultiTextField] A callback for when a Chip value is deleted */
  onMultiValueDelete?: (value: string) => void;
  /** [For MultiTextField] A callback for when all values are deleted  */
  onMultiValueClearAll?: () => void;
} & TextInputBaseProps &
  InputProps &
  TestProps;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id: userDefinedId,
    suffix = null,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isReadOnly,
    status = { type: 'normal' },
    onInput,
    isMulti = false,
    tags = [],
    onMultiValueDelete,
    onMultiValueClearAll = () => null,
    ...rest
  } = props;
  const theme = useTheme();
  const id = useRef(userDefinedId || generateUniqueID('textfield_')).current;

  const tokens = getTextInputBaseTokens(theme);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const isLocked = status?.type === 'read-only';

  const hintMessageId = status?.hintMessage ? status?.id ?? `${id}_hintMessage` : undefined;

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

  const textInputBaseSx = useMemo(
    () =>
      !suffixContent
        ? {
            textField: {
              paddingRight: tokens('paddingContentLeft'),
            },
          }
        : {},
    [suffixContent, tokens]
  );

  return (
    <div onClick={handleClick}>
      {isMulti ? (
        <MultiTextFieldBase
          {...props}
          isTextfield
          onOptionDelete={onMultiValueDelete as (option?: string | SelectOption) => void}
          onClearAllOptions={onMultiValueClearAll}
          label={label}
          onInput={onInput}
          onKeyDown={rest.onKeyDown}
          selectedOptions={tags}
          value={rest.value}
          status={{ ...status, id: hintMessageId }}
          ref={combinedRefs}
        />
      ) : (
        <TextInputBase {...props} status={{ ...status, id: hintMessageId }} sx={textInputBaseSx}>
          <div css={{ width: '100% ' }}>
            <input
              readOnly={isLocked || isReadOnly}
              css={inputStyle({ label, placeholder })}
              placeholder={placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
              required={isRequired}
              id={id}
              disabled={isDisabled || isLocked}
              onInput={onInput}
              data-testid={rest.dataTestId ? `input_${rest.dataTestId}` : 'input'}
              aria-invalid={status?.type === 'error'}
              aria-describedby={hintMessageId}
              {...omit(rest, 'dataTestId')}
              ref={combinedRefs}
            />
            <Label
              htmlFor={id}
              label={label}
              isRequired={isRequired}
              isAnimated={Boolean(rest.value)}
              hasError={status?.type === 'error'}
            />
          </div>
          {suffixContent && (
            <div aria-hidden={!suffixContent} css={suffixContainerStyle()}>
              {suffixContent}
            </div>
          )}
        </TextInputBase>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

export default React.memo(TextField, isEqual);
