import useFieldUtils from 'hooks/useFieldUtils';
import { omit } from 'lodash';
import type { InputHTMLAttributes} from 'react';
import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';
import InputMask from 'react-input-mask';
import { generateUniqueID } from 'utils/helpers';

import { suffixContainerStyle } from './TextField.style';
import type { TestProps } from '../../utils/types';
import Label from '../Label';
import MultiTextFieldBase from 'components/MultiTextFieldBase/MultiTextFieldBase';
import type { SelectOption } from 'components/Select';
import type { TextInputBaseProps } from 'components/TextInputBase';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type InputProps = Partial<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled' | 'size'>
>;

type MaskProps = { mask?: never } | { mask?: string | (string | RegExp)[]; placeholder?: never };

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
  /** [For MultiTextField] The values of the tags */
  tags?: string[];
  /** [For MultiTextField] A callback for when a Tag value is deleted */
  onMultiValueDelete?: (value: string) => void;
  /** [For MultiTextField] A callback for when all values are deleted  */
  onMultiValueClearAll?: () => void;
} & TextInputBaseProps &
  MaskProps &
  InputProps &
  TestProps;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id: userDefinedId,
    suffix = null,
    label,
    placeholder = '',
    size = 'normal',
    isRequired = false,
    isDisabled,
    isReadOnly,
    status = { type: 'normal' },
    onInput,
    isMulti = false,
    tags = [],
    onMultiValueDelete,
    onMultiValueClearAll = () => null,
    mask,
    sx,
    ...rest
  } = props;
  const id = useRef(userDefinedId || generateUniqueID('textfield_')).current;

  const {
    isLocked,
    hintMessageId,
    handleContainerClick,
    textInputBaseSx,
    suffixContent,
    combinedRefs,
  } = useFieldUtils({
    id,
    suffix,
    status,
    size,
    isDisabled,
    ref,
    sx,
  });

  const inputProps = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    readOnly: isLocked || isReadOnly,
    css: inputStyle({ label, placeholder, isLocked, isDisabled, size }),
    ...(size === 'normal'
      ? { placeholder: placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label }
      : { placeholder: ' ' }),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    required: isRequired,
    id: id,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    disabled: isDisabled || isLocked,
    onInput: onInput,
    'data-testid': rest.dataTestId ? `input_${rest.dataTestId}` : 'input',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'aria-invalid': status?.type === 'error',
    'aria-describedby': hintMessageId,
    ...omit(rest, 'dataTestId'),
  };

  return (
    <div onClick={handleContainerClick}>
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
        <TextInputBase
          {...props}
          status={{ ...status, id: hintMessageId }}
          sx={textInputBaseSx(!suffixContent)}
        >
          <div css={{ display: 'flex', flex: 1 }}>
            {mask ? (
              <InputMask
                {...inputProps}
                mask={mask}
                maskChar={' '}
                inputRef={combinedRefs}
                dangerouslySetInnerHTML={undefined}
              />
            ) : (
              <input {...inputProps} ref={combinedRefs} />
            )}
            <Label
              htmlFor={id}
              label={label}
              size={size}
              isRequired={isRequired}
              isAnimated={Boolean(rest.value)}
              hasError={!isDisabled && status?.type === 'error'}
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
