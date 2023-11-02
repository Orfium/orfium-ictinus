import React, { FC, useState } from 'react';

import TextField from 'components/TextField/TextField';
import { TextInputBaseProps } from 'components/TextInputBase';

type Props = {
  mask: string;
  hasSuffix?: boolean;
} & Partial<
  Pick<
    TextInputBaseProps,
    'placeholder' | 'label' | 'status' | 'isRequired' | 'isDisabled' | 'suffix'
  >
>;

const TextFieldShowCase: FC<Props> = ({
  mask,
  label = '',
  status = { type: 'normal' },
  placeholder = undefined,
  isDisabled = false,
  hasSuffix = false,
  suffix,
  isRequired = false,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue((event.target as HTMLInputElement).value);

  const isMaskedTextField = !!mask;

  const commonProps = {
    label,
    value,
    isDisabled,
    isRequired,
    onChange: handleChange,
    suffix: hasSuffix ? suffix : undefined,
    status,
  };

  return (
    <div style={{ width: '200px' }}>
      {isMaskedTextField ? (
        <TextField mask={mask} {...commonProps} />
      ) : (
        <TextField placeholder={placeholder} {...commonProps} />
      )}
    </div>
  );
};

export default TextFieldShowCase;
