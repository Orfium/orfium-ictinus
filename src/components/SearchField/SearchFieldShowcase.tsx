import React, { useState } from 'react';

import Stack from '../storyUtils/Stack';
import { Props as TextFieldProps } from '../TextField/TextField';
import SearchField, { Props } from './SearchField';

const SearchFieldShowcase = ({
  isDisabled,
  placeholder,
  initialValue,
}: Partial<Props & TextFieldProps> & { initialValue?: string }) => {
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
