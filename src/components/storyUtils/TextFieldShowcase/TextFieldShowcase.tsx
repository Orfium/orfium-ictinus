/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TextField from 'components/TextField';

type Props = {
  label?: string;
  status?: string;
  withIndicator?: boolean;
};

const TextFieldShowcase: React.FC<Props> = ({ label, status = '', withIndicator = false }) => {
  return (
    <div>
      <TextField
        error={Boolean(status === 'error')}
        label={label}
        success={Boolean(status === 'success')}
        withIndicator={withIndicator}
      />
    </div>
  );
};

export default TextFieldShowcase;
