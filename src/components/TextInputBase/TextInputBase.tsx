import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';
import useTheme from 'hooks/useTheme';
import React, { FC } from 'react';
import { formFieldStyles } from 'theme/palette';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { errorMsgStyle, textFieldStyle, wrapperStyle } from './TextInputBase.style';

export type Props = {
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional icon to show to the left */
  leftIcon?: AcceptedIconNames | JSX.Element | null;
  /** An optional icon to show to the right */
  rightIcon?: AcceptedIconNames | JSX.Element | null;
  /** If the text field value is required */
  required?: boolean;
  /** If the text field is disabled */
  disabled?: boolean;
  /** If the text field is locked. Locked state is unique to this and the system */
  locked?: boolean;
  /** dark mode of the text field */
  dark?: boolean;
  /** Error message */
  hintMsg?: React.ReactNode | string;
  /** value of the input */
  value?: string | number;
  /** if the input will be without default style for use inside the library */
  lean?: boolean;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** Sets the size of the textField */
  size?: 'md' | 'sm';
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
};

/** This Component is a wrapper for all primitives that hold text like Select, TextArea, TextInput. Here we keep the
 * logic of all the hover, focus status etc and the styling of these centralized **/
const TextInputBase: FC<Props> = ({
  leftIcon = null,
  label,
  lean = false,
  disabled,
  hintMsg,
  styleType = 'filled',
  status = 'normal',
  locked = false,
  size = DEFAULT_SIZE,
  dark = false,
  children,
}) => {
  const theme = useTheme();
  const hintMessageToShow = hintMsg && (
    <div css={errorMsgStyle({ status })}>
      <Icon
        color={status === 'error' ? 'error' : theme.utils.getColor('lightGray', 600)}
        name={status === 'error' ? 'issues' : 'info'}
        size={12}
      />
      {hintMsg}
    </div>
  );

  return (
    <React.Fragment>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          width: 'fill-available',
        }}
      >
        <div css={wrapperStyle({ dark, locked, disabled, status, lean, styleType })}>
          <div css={textFieldStyle({ size, label, leftIcon, lean })}>{children}</div>
        </div>
      </div>
      {hintMsg && status !== 'normal' && hintMessageToShow}
    </React.Fragment>
  );
};

export default TextInputBase;
