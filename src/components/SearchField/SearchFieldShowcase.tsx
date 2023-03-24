import React, { useState } from 'react';

import SearchField, { SearchFieldProps } from './SearchField';
import Stack from '../storyUtils/Stack';
import { TextFieldProps } from '../TextField/TextField';

const SearchFieldShowcase = ({
  isDisabled,
  placeholder,
  initialValue,
}: Partial<SearchFieldProps & TextFieldProps> & { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue ?? '');

  return (
    <Stack>
      <SearchField
        isDisabled={isDisabled}
        placeholder={placeholder}
        size={'md'}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
      <SearchField
        isDisabled={isDisabled}
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
