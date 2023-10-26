import React, { useState } from 'react';

import Filter from 'components/Filter';
import { FilterOption } from 'components/Filter/types';

export const dummyUnrefinedData = new Array(15).fill(undefined).map((value, index) => ({
  value: index,
  label: `test option ${index}`,
}));

type AsyncFilterShowcaseProps = {
  minCharactersToSearch?: number;
};

export const AsyncFilterShowcase: React.FCC<AsyncFilterShowcaseProps> = ({
  minCharactersToSearch = 0,
}) => {
  const defaultValue = { value: 18, label: 'Default value' };
  const [stateItem, setStateItem] = React.useState<FilterOption | undefined>();
  const [items, setOptions] = useState<FilterOption[]>(dummyUnrefinedData);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAsyncSearch = (term: string) => {
    setIsLoading(true);

    return new Promise<FilterOption[]>((resolve) => {
      setTimeout(() => {
        resolve(dummyUnrefinedData);
      }, 1500);
    }).then((values) => {
      const filteredValues = values.filter((option) => option.label.includes(term));

      setOptions(filteredValues);
      setIsLoading(false);
    });
  };

  const handleSelectItem = (item: FilterOption) => {
    setStateItem(item);
    setOptions(dummyUnrefinedData);
  };

  return (
    <Filter
      isSearchable
      isLoading={isLoading}
      minCharactersToSearch={minCharactersToSearch}
      items={items}
      selectedItem={stateItem}
      defaultValue={defaultValue}
      onAsyncSearch={handleAsyncSearch}
      onSelect={handleSelectItem}
      styleType={'filled'}
      label={'Async Label'}
    />
  );
};

export default AsyncFilterShowcase;
