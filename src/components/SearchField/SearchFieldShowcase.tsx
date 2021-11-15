import React, { useState } from 'react';

import Stack from '../storyUtils/Stack';
import { Props as TextFieldProps } from '../TextField/TextField';
import SearchField, { Props } from './SearchField';

const SearchFieldShowcase = ({
  disabled,
  onClear,
  placeholder,
  initialValue,
}: (Props & TextFieldProps) & { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue ?? '');

  return (
    <Stack>
      <SearchField
        disabled={disabled}
        placeholder={placeholder}
        size={'md'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={onClear ? () => setValue('') : undefined}
      />
      <SearchField
        disabled={disabled}
        placeholder={placeholder}
        size={'sm'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={onClear ? () => setValue('') : undefined}
      />
    </Stack>
  );
};

export default SearchFieldShowcase;
