import React, { forwardRef, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';

import Filter from './Filter';
import type { FilterOption, FilterProps } from './Filter.types';

const StatefulFilter = forwardRef<HTMLButtonElement, FilterProps>(
  ({ isMulti, selectedFilter, onChange = () => {}, ...rest }, ref) => {
    const [inputValue, setInputValue] = useState<FilterOption | FilterOption[]>(
      isMulti ? selectedFilter || [] : selectedFilter || undefined
    );

    const callback = useCallback(
      (option: any) => {
        setInputValue(option);
        onChange(option);
      },
      [onChange]
    );

    return (
      // @ts-ignore
      <Filter
        {...rest}
        selectedFilter={inputValue}
        isMulti={isMulti}
        onChange={callback}
        onClear={() => setInputValue(isMulti ? [] : undefined)}
        ref={ref}
      />
    );
  }
);

StatefulFilter.displayName = 'StatefulFilter';

export default React.memo(StatefulFilter, isEqual);
