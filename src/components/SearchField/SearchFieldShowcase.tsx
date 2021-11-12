import React, { useState } from 'react';

import Stack from '../storyUtils/Stack';
import SearchField from './SearchField';

const SearchFieldShowcase = () => {
  const [value, setValue] = useState('');

  return (
    <Stack>
      <SearchField
        size={'md'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
      <SearchField
        size={'sm'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
      <SearchField size={'sm'} value={value} onChange={e => setValue(e.target.value)} />
      <SearchField
        disabled
        size={'sm'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    </Stack>
  );
};

export default SearchFieldShowcase;
