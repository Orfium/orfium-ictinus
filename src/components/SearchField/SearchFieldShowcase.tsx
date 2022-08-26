import React, { useState } from 'react';

import Stack from '../storyUtils/Stack';
import { Props as TextFieldProps } from '../TextField/TextField';
import SearchField, { Props } from './SearchField';

const SearchFieldShowcase = ({
  disabled,
  placeholder,
  initialValue,
}: Partial<Props & TextFieldProps> & { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue ?? '');

  return (
    <Stack>
      <SearchField
        disabled={disabled}
        placeholder={placeholder}
        size={'md'}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
      <SearchField
        disabled={disabled}
        placeholder={placeholder}
        size={'sm'}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    </Stack>
  );
};

export default SearchFieldShowcase;
