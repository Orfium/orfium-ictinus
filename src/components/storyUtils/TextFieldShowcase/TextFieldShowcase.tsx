/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TextField from 'components/TextField';
import { Props as TextFieldProps } from 'components/TextField/TextField';

type Props = {
  errorMsg?: React.ReactNode | string;
  label?: string;
  status?: string;
  withErrorMsg?: boolean;
  withIndicator?: boolean;
};

const TextFieldShowcase: React.FC<Props> = ({
  errorMsg,
  label,
  status = '',
  withErrorMsg = true,
  withIndicator = true,
}) => {
  const TextFieldProps: TextFieldProps = {
    error: status === 'error',
    label,
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
