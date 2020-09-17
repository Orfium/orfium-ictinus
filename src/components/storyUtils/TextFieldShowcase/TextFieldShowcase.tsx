/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TextField from 'components/TextField';
import { Props as TextFieldProps } from 'components/TextField/TextField';

type Props = {
  disabled?: boolean;
  errorMsg?: React.ReactNode | string;
  label?: string;
  lean?: boolean;
  status?: string;
  styleType?: 'filled' | 'outlined' | 'elevated';
  withErrorMsg?: boolean;
  withIndicator?: boolean;
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
