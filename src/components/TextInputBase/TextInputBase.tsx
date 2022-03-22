import useTheme from 'hooks/useTheme';
import React, { FC } from 'react';
import { formFieldStyles } from 'theme/palette';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { generateTestDataId } from '../../utils/helpers';
import { TestProps } from '../../utils/types';
import { textInputSizes } from './config';
import { errorMsgStyle, textFieldStyle, wrapperStyle } from './TextInputBase.style';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';

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
  size?: typeof textInputSizes[number];
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
  /** If the field is used as a Search component */
  isSearch?: boolean;
  /** If the field is used as a TextArea component */
  isTextArea?: boolean;
};

/** This Component is a wrapper for all primitives that hold text like Select, TextArea, TextInput. Here we keep the
 * logic of all the hover, focus status etc and the styling of these centralized **/
const TextInputBase: FC<Props & TestProps> = ({
  lean = false,
  isSearch = false,
  isTextArea = false,
  disabled,
  hintMsg,
  styleType = 'filled',
  dataTestId,
  status = 'normal',
  locked = false,
  size = DEFAULT_SIZE,
  dark = false,
  children,
}) => {
  const theme = useTheme();
  const hintMessageToShow = hintMsg && (
    <div data-testid={generateTestDataId('error', dataTestId)} css={errorMsgStyle({ status })}>
      <Icon
        color={status === 'error' ? 'error' : theme.utils.getColor('lightGrey', 650)}
        name={status === 'error' ? 'issues' : 'info'}
        size={12}
      />
      {hintMsg}
    </div>
  );

  return (
    <React.Fragment>
      <div
        data-testid={dataTestId}
        css={wrapperStyle({
          dark,
          locked,
          disabled,
          status,
          lean,
          styleType,
          isSearch,
          isTextArea,
          size,
        })}
      >
        <div css={textFieldStyle({ lean, isTextArea })}>{children}</div>
      </div>
      {hintMsg && status !== 'normal' && hintMessageToShow}
    </React.Fragment>
  );
};

export default TextInputBase;
