import React, { forwardRef, useState } from 'react';
import isEqual from 'react-fast-compare';

import Search from './Search';
import type { SearchProps } from './Search.types';
import type { FilterOption } from 'components/Filter';

export const LABEL = 'Friends';
export const options = [
  { label: 'Ross Geller', value: 'option_1' },
  { label: 'Monica Geller', value: 'option_2' },
  { label: 'Chandler Bing', value: 'option_3' },
  { label: 'Joey Tribbiani', value: 'option_4' },
  { label: 'Rachel Green', value: 'option_5' },
  { label: 'Phoebe Buffay', value: 'option_6' },
];

const StatefulSearch = forwardRef<HTMLInputElement, Partial<SearchProps> & { hasFilter?: boolean }>(
  ({ hasFilter, onClear }, ref) => {
    const [value, setValue] = useState<string>();

    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);

    const handleClear = onClear ?? (() => setValue(''));

    const handleFilterClear = () => setSelectedFilter(undefined);

    const filterProps = hasFilter
      ? {
          filterConfig: {
            defaultValue: { label: 'All', value: 'all' },
            label: LABEL,
            items: options,
            selectedFilter,
            onChange: setSelectedFilter,
            onClear: handleFilterClear,
          },
        }
      : {};

    return (
      <Search
        value={value}
        onClear={handleClear}
        onInput={(e) => setValue(e.target.value)}
        {...filterProps}
      />
    );
  }
);

StatefulSearch.displayName = 'StatefulSearch';

export default React.memo(StatefulSearch, isEqual);
