import { CSSObject } from '@emotion/serialize';
import useTheme from 'hooks/useTheme';
import React, { FC } from 'react';

import { hintMessageStyle, textFieldStyle, wrapperStyle } from './TextInputBase.style';
import { getTextInputBaseTokens } from './TextInputBase.tokens';
import { generateTestDataId } from '../../utils/helpers';
import { TestProps } from '../../utils/types';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';

export type TextInputBaseProps = {
  /** The label of the text field that will be used as a placeholder and a label */
  label?: string;
  /** The placeholder of the input that will be used. This is shown if no label exists */
  placeholder?: string;
  /** An optional prefix (element or icon-name) to show to the left */
  prefix?: AcceptedIconNames | JSX.Element | null;
  /** An optional suffix (element or icon-name) to show to the left */
  suffix?: AcceptedIconNames | JSX.Element | null;
  /** If the text field value is required */
  isRequired?: boolean;
  /** If the text field is disabled */
  isDisabled?: boolean;
  /** The status of the TextInput with an optional hint message */
  status?: {
    type: 'normal' | 'error' | 'read-only';
    hintMessage?: string;
  };
  /** value of the input */
  value?: string | number;
  /** Sx prop to override specific properties */
  sx?: {
    wrapper?: CSSObject;
    textField?: CSSObject;
    input?: CSSObject;
  };
} & TestProps;

/** This Component is a wrapper for all primitives that hold text like Select, TextArea, TextInput. Here we keep the
 * logic of all the hover, focus status etc and the styling of these centralized **/
const TextInputBase: FC<TextInputBaseProps> = ({
  isDisabled,
  dataTestId,
  status = { type: 'normal' },
  children,
  sx,
}) => {
  const theme = useTheme();

  const tokens = getTextInputBaseTokens(theme);

  const hintMessageToShow = status.hintMessage && (
    <div data-testid={generateTestDataId('error', dataTestId)} css={hintMessageStyle({ status })}>
      <Icon
        color={
          status.type === 'error'
            ? tokens('textColor.errorHintColor')
            : tokens('textColor.inputColorAlt')
        }
        name={status.type === 'error' ? 'warning' : 'info'}
        size={12}
      />
      <span>{status.hintMessage}</span>
    </div>
  );

  return (
    <React.Fragment>
      <div
        data-testid={dataTestId}
        css={wrapperStyle({
          isDisabled,
          status,
          sx,
        })}
      >
        <div css={textFieldStyle({ sx })}>{children}</div>
      </div>
      {status.hintMessage && status.type !== 'read-only' && hintMessageToShow}
    </React.Fragment>
  );
};

export default TextInputBase;
