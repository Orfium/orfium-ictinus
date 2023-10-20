import React, { useState } from 'react';

import type { SearchFieldProps } from './SearchField';
import SearchField from './SearchField';
import Stack from '../storyUtils/Stack';
import type { TextFieldProps } from '../TextField/TextField';

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
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onClear={() => setValue('')}
        label={''}
      />
    </Stack>
  );
};

export default SearchFieldShowcase;
