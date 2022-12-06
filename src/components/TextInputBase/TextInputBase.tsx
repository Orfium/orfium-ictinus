import { CSSObject } from '@emotion/serialize';
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

export type TextInputBaseProps = {
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional icon to show to the left
   * TODO This prop will be renamed to 'prefix', like: https://ant.design/components/input/#components-input-demo-presuffix */
  leftIcon?: AcceptedIconNames | JSX.Element | null;
  /** An optional icon to show to the right
   * TODO This prop will be renamed to 'suffix', like: https://ant.design/components/input/#components-input-demo-presuffix */
  rightIcon?: AcceptedIconNames | JSX.Element | null;
  /** If the text field value is required */
  isRequired?: boolean;
  /** If the text field is disabled */
  isDisabled?: boolean;
  /** If the text field is locked. Locked state is unique to this and the system */
  isLocked?: boolean;
  /** dark mode of the text field */
  isDark?: boolean;
  /** Error message */
  hintMsg?: React.ReactNode | string;
  /** value of the input */
  value?: string | number;
  /** if the input will be without default style for use inside the library */
  isLean?: boolean;
  /** Style of input field */
  styleType?: formFieldStyles;
  /** Sets the size of the textField */
  size?: typeof textInputSizes[number];
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
  /** Sx prop to override specific properties */
  sx?: {
    wrapper?: CSSObject;
    textField?: CSSObject;
    input?: CSSObject;
  };
  /** @deprecated This is a compatibility prop that will be removed in the next version, along with the min-width value
   * of the TextField. It will be replaced by a fullWidth prop. */
  hasMinWidthCompat?: boolean;
} & TestProps;

/** This Component is a wrapper for all primitives that hold text like Select, TextArea, TextInput. Here we keep the
 * logic of all the hover, focus status etc and the styling of these centralized **/
const TextInputBase: FC<TextInputBaseProps> = ({
  isLean = false,
  isDisabled,
  hintMsg,
  styleType = 'filled',
  dataTestId,
  status = 'normal',
  isLocked = false,
  size = DEFAULT_SIZE,
  isDark = false,
  children,
  sx,
  hasMinWidthCompat = true,
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
          isDark,
          isLocked,
          isDisabled,
          status,
          isLean,
          styleType,
          size,
          sx,
          hasMinWidthCompat,
        })}
      >
        <div css={textFieldStyle({ isLean, sx })}>{children}</div>
      </div>
      {hintMsg && status !== 'normal' && hintMessageToShow}
    </React.Fragment>
  );
};

export default TextInputBase;
