import React from 'react';
import { generateTestDataId } from 'utils/helpers';

import SearchInput from './components/SearchInput';
import { FilterProps } from '../../types';
import Options from '../Options/Options';
import { menuStyle } from 'components/Filter/Filter.style';
import { FilterOption } from 'components/Filter/types';

type Props = Pick<
  FilterProps,
  'isSearchable' | 'dataTestId' | 'isLoading' | 'isVirtualized' | 'defaultValue' | 'selectedItem'
> & {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredOptions: FilterOption[];
  handleSelect: (option: FilterOption) => void;
  isDefaultOptionVisible: boolean;
};

const SingleFilter: React.FC<Props> = ({
  isSearchable,
  dataTestId,
  searchValue,
  handleChange,
  isLoading,
  filteredOptions,
  isVirtualized,
  defaultValue,
  selectedItem,
  handleSelect,
  isDefaultOptionVisible,
}) => {
  return (
    <div css={menuStyle()} data-testid={generateTestDataId('filter-menu', dataTestId)}>
      {isSearchable && (
        <SearchInput
          value={searchValue}
          onChange={handleChange}
          dataTestId={dataTestId}
          isLoading={isLoading}
        />
      )}
      <Options
        dataTestId={dataTestId}
        items={filteredOptions}
        isVirtualized={isVirtualized}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        selectedItem={selectedItem}
        onSelect={handleSelect}
        isDefaultOptionVisible={isDefaultOptionVisible}
      />
    </div>
  );
};

export default SingleFilter;
