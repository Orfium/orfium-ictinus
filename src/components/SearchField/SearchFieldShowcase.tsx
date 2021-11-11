import React, { useState } from 'react';

import SearchField from './SearchField';

const SearchFieldShowcase = () => {
  const [value, setValue] = useState('lol');

  return (
    <SearchField
      value={value}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  );
};

export default SearchFieldShowcase;
