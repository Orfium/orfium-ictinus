import type { FC} from 'react';
import React, { useState } from 'react';

import TextField from 'components/TextField/TextField';
import type { TextInputBaseProps } from 'components/TextInputBase';

type Props = {
  mask: string;
  hasSuffix?: boolean;
} & Partial<
  Pick<
    TextInputBaseProps,
    'placeholder' | 'label' | 'status' | 'isRequired' | 'isDisabled' | 'suffix' | 'size'
  >
>;

const TextFieldShowCase: FC<Props> = ({
  mask,
  label = '',
  size = 'normal',
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
    size,
    isDisabled,
    isRequired,
    onChange: handleChange,
    suffix: hasSuffix ? suffix : undefined,
    status,
  };

  return (
    <div style={{ width: '300px' }}>
      {isMaskedTextField ? (
        <TextField mask={mask} {...commonProps} />
      ) : (
        <TextField placeholder={placeholder} {...commonProps} />
      )}
    </div>
  );
};

export default TextFieldShowCase;
