import React, { FC, useState } from 'react';

import TextField from 'components/TextField/TextField';
import { TextInputBaseProps } from 'components/TextInputBase';

type Props = {
  mask: string;
} & Partial<Pick<TextInputBaseProps, 'status' | 'isRequired' | 'isDisabled' | 'suffix'>>;

const MaskedTextFieldShowCase: FC<Props> = ({
  mask,
  status = { type: 'normal' },
  isDisabled = false,
  suffix,
  isRequired = false,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue((event.target as HTMLInputElement).value);

  return (
    <div style={{ width: '500px' }}>
      <TextField
        label={'Masked TextField'}
        value={value}
        isDisabled={isDisabled}
        isRequired={isRequired}
        onChange={handleChange}
        suffix={suffix}
        mask={mask}
        status={status}
      />
    </div>
  );
};

export default MaskedTextFieldShowCase;
