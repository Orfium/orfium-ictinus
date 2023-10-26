import React, { forwardRef, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';

import Select, { emptyValue } from './Select';
import type { SelectOption, SelectProps } from './types';

const StatefulSelect = forwardRef<HTMLInputElement, SelectProps>(
  ({ isMulti, selectedOption, onChange = () => {}, ...rest }, ref) => {
    const [inputValue, setInputValue] = useState<SelectOption | SelectOption[]>(
      isMulti ? selectedOption || [] : selectedOption || emptyValue
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
      <Select
        {...rest}
        selectedOption={inputValue}
        isMulti={isMulti}
        onChange={callback}
        ref={ref}
      />
    );
  }
);

StatefulSelect.displayName = 'StatefulSelect';

export default React.memo(StatefulSelect, isEqual);
