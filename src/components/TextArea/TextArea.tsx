import * as React from 'react';
import isEqual from 'react-fast-compare';

import { sxProp } from './TextArea.style';
import { useTheme } from '../../index';
import { TestProps } from '../../utils/types';
import TextInputBase, { TextInputBaseProps } from '../TextInputBase/TextInputBase';
import { inputStyle as baseInputStyle } from 'components/TextInputBase/TextInputBase.style';

export type TextAreaProps = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** If the text field value is required */
  isRequired?: boolean;
  /** If the text field is disabled */
  isDisabled?: boolean;
  /** If the text area can be resized */
  isResizeEnabled?: boolean;
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
} & Pick<TextInputBaseProps, 'status'> &
  TestProps;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    id = undefined,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isResizeEnabled = true,
    ...rest
  } = props;

  const theme = useTheme();
  const sx = sxProp(!isDisabled && isResizeEnabled, theme);

  return (
    <React.Fragment>
      <TextInputBase {...props} sx={sx}>
        <div css={{ width: '100% ' }}>
          <textarea
            css={baseInputStyle({
              placeholder,
              sx,
            })}
            placeholder={placeholder}
            required={isRequired}
            id={id}
            disabled={isDisabled}
            {...rest}
            ref={ref}
          />
        </div>
      </TextInputBase>
    </React.Fragment>
  );
});

TextArea.displayName = 'TextArea';

export default React.memo(TextArea, isEqual);
