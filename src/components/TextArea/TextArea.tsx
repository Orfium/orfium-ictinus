import omit from 'lodash/omit';
import * as React from 'react';

import { useTheme } from '../../index';
import { formFieldStyles } from '../../theme/palette';
import { TestProps } from '../../utils/types';
import TextInputBase from '../TextInputBase/TextInputBase';
import { sxProp } from './TextArea.style';
import { inputStyle as baseInputStyle } from 'components/TextInputBase/TextInputBase.style';

export type Props = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** If the text field value is required */
  required?: boolean;
  /** If the text field is disabled */
  disabled?: boolean;
  /** If the text area can be resized */
  resizeEnabled?: boolean;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** Error message */
  hintMsg?: React.ReactNode | string;
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
} & Pick<HTMLTextAreaElement, 'cols' | 'rows'>;

const TextArea = React.forwardRef<HTMLTextAreaElement, Props & TestProps>((props, ref) => {
  const {
    id = undefined,
    placeholder = '',
    required = false,
    disabled,
    resizeEnabled = true,
    ...rest
  } = props;

  const theme = useTheme();
  const sx = sxProp(!disabled && resizeEnabled, theme);

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
            required={required}
            id={id}
            disabled={disabled}
            {...omit(rest, ['styleType', 'hintMsg'])}
            ref={ref}
          />
        </div>
      </TextInputBase>
    </React.Fragment>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
