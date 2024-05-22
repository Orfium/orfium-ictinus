import * as React from 'react';
import isEqual from 'react-fast-compare';
import type { TestProps } from 'utils/types';

import { hintMessageStyle, sxProp } from './TextArea.style';
import { Label, useTheme } from '../../index';
import type { TextInputBaseProps } from '../TextInputBase/TextInputBase';
import TextInputBase from '../TextInputBase/TextInputBase';
import { inputStyle as baseInputStyle } from 'components/TextInputBase/TextInputBase.style';

export type TextAreaProps = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
  /** The value of the textarea element */
  value?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** If the text field value is required */
  isRequired?: boolean;
  /** Boolean to make the input readonly. Default to false. */
  isReadOnly?: boolean;
  /** If the text field is disabled */
  isDisabled?: boolean;
  /** If the text area can be resized */
  isResizeEnabled?: boolean;
  /** Number of maximum characters. Will be shown on the counter on the bottom right of the component */
  maxCharacters?: number;
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
} & Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'> &
  Pick<TextInputBaseProps, 'status' | 'label'> &
  TestProps;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    id = undefined,
    label,
    placeholder,
    isRequired = false,
    isReadOnly,
    isDisabled,
    status,
    isResizeEnabled = true,
    maxCharacters,
    ...rest
  } = props;

  const isLocked = status?.type === 'read-only';

  const theme = useTheme();
  const sx = sxProp({
    isResizeEnabled: !isDisabled && !isLocked && isResizeEnabled,
    label,
    placeholder,
  })(theme);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const shouldShowCounter = maxCharacters && status?.type != 'error';

  const counter = shouldShowCounter ? (
    <div css={hintMessageStyle({ isDisabled })}>
      {rest.value?.length}/{maxCharacters}
    </div>
  ) : undefined;

  const textAreaStatus = status
    ? { ...status, hintMessage: !shouldShowCounter ? status.hintMessage : undefined }
    : undefined;

  return (
    <React.Fragment>
      <TextInputBase {...props} status={textAreaStatus} sx={sx}>
        <div css={{ width: '100%' }}>
          <textarea
            role="textbox"
            aria-multiline={true}
            readOnly={isLocked || isReadOnly}
            css={baseInputStyle({
              placeholder,
              label,
              sx,
              isLocked,
              isDisabled,
            })}
            placeholder={placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
            required={isRequired}
            id={id}
            maxLength={maxCharacters}
            disabled={isDisabled || isLocked}
            {...rest}
            ref={ref}
          />
          <Label
            htmlFor={id}
            label={label}
            isRequired={isRequired}
            isAnimated={Boolean(rest.value)}
            hasError={!isDisabled && status?.type === 'error'}
          />
        </div>
      </TextInputBase>
      {counter}
    </React.Fragment>
  );
});

TextArea.displayName = 'TextArea';

export default React.memo(TextArea, isEqual);
