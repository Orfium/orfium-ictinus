/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TextField from 'components/TextField';
import { Props as TextFieldProps } from 'components/TextField/TextField';
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
  iconName?: AcceptedIconNames | 'none';
  withIcon?: boolean;
  size: 'md' | 'sm';
};

const TextFieldShowcase: React.FC<Props> = ({
  disabled,
  errorMsg,
  label,
  lean = false,
  status = '',
  styleType = 'filled',
  iconName = 'search',
  size,
}) => {
  const TextFieldProps: TextFieldProps = {
    disabled,
    error: status === 'error',
    label,
    lean,
    styleType,
    success: status === 'success',
    errorMsg: status === 'error' && errorMsg ? errorMsg : undefined,
    size,
    ...(iconName !== 'none' ? { leftIcon: <Icon name={iconName} color={'#000'} /> } : {}),
  };

  return (
    <div>
      <TextField {...TextFieldProps} />
    </div>
  );
};

export default TextFieldShowcase;
