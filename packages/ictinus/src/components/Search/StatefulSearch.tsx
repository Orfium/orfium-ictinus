import React, { forwardRef, useState } from 'react';
import isEqual from 'react-fast-compare';

import Search from './Search';
import type { SearchProps } from './Search.types';
import type { FilterOption } from 'components/Filter';

const StatefulSearch = forwardRef<HTMLInputElement, Partial<SearchProps>>((props, ref) => {
  const { onClear, onInput, filterConfig, ...rest } = props;

  const [value, setValue] = useState<string>();

  const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);

  const handleClear = () => {
    setValue('');
    if (onClear) {
      onClear();
    }
  };

  const handleFilterClear = () => {
    setSelectedFilter(undefined);
    if (filterConfig?.onClear) {
      filterConfig?.onClear();
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    if (onInput) {
      onInput(e.target.value);
    }
  };

  const hasFilter = Boolean(
    filterConfig?.defaultValue && filterConfig?.label && filterConfig?.items
  );

  const filterProps = hasFilter
    ? {
        filterConfig: {
          defaultValue: { label: 'All', value: 'all' },
          selectedFilter,
          onChange: setSelectedFilter,
          onClear: handleFilterClear,
          ...filterConfig,
        },
      }
    : {};

  return (
    <Search
      ref={ref}
      value={value}
      onClear={handleClear}
      onInput={handleInput}
      {...filterProps}
      {...rest}
    />
  );
});

StatefulSearch.displayName = 'StatefulSearch';

export default React.memo(StatefulSearch, isEqual);
