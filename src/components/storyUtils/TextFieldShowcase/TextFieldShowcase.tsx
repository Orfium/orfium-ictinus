/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TextField from 'components/TextField';
import { Props as TextFieldProps } from 'components/TextField/TextField';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../../theme/palette';
import { DEFAULT_COLOR_CONFIG } from '../../TextField/TextField.style';
import Icon from '../../Icon';
import { AcceptedIconNames } from '../../Icon/types';

type Props = {
  disabled?: boolean;
  errorMsg?: React.ReactNode | string;
  label?: string;
  lean?: boolean;
  status?: string;
  styleType?: 'filled' | 'outlined' | 'elevated';
  withErrorMsg?: boolean;
  withIndicator?: boolean;
  /** Sets the background color of the textField*/
  fill?: typeof flatColors[number];
  /** Sets the background color's shade of the textField*/
  fillShade?: typeof colorShades[number];
  iconName?: AcceptedIconNames;
  withIcon?: boolean;
};

const TextFieldShowcase: React.FC<Props> = ({
  disabled,
  errorMsg,
  label,
  lean = false,
  status = '',
  styleType = 'filled',
  withErrorMsg = true,
  withIndicator = true,
  fill = DEFAULT_COLOR_CONFIG.fill,
  fillShade = DEFAULT_COLOR_CONFIG.fillShade,
  iconName = 'search',
  withIcon = false,
}) => {
  const TextFieldProps: TextFieldProps = {
    disabled,
    error: status === 'error',
    label,
    lean,
    styleType,
    success: status === 'success',
    withErrorMsg,
    withIndicator,
    fillShade,
    fill,
    ...(withIcon
      ? { leftIcon: <Icon name={iconName} color={pickTextColorFromSwatches(fill, fillShade)} /> }
      : {}),
  };

  if (errorMsg) {
    TextFieldProps.errorMsg = errorMsg;
  }

  return (
    <div>
      <TextField {...TextFieldProps} />
    </div>
  );
};

export default TextFieldShowcase;
