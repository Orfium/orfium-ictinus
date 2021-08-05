import React from 'react';

import Filter from 'components/Filter';
import { FilterOption, FilterType, StyleType } from 'components/Filter/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dummyUnrefinedData = Array.from({ length: 15 }, (value, index) => ({
  value: index + 1,
  label: `Test option ${index}`,
}));

interface Props {
  styleType: StyleType;
  filterType: FilterType;
  color: string;
  items?: Array<FilterOption>;
  label?: string;
  defaultValue?: FilterOption;
  selectedItem?: FilterOption;
  isSearchable?: boolean;
}
const FilterShowcase = ({
  styleType,
  filterType,
  color,
  items = dummyUnrefinedData,
  label = 'Label',
  defaultValue = { value: 18, label: 'Default value' },
  selectedItem,
  isSearchable = false,
}: Props) => {
  const [stateItem, setStateItem] = React.useState<FilterOption | undefined>(selectedItem);

  return (
    <div>
      <Filter
        styleType={styleType}
        filterType={filterType}
        defaultValue={defaultValue}
        items={items}
        selectedItem={stateItem}
        onSelect={setStateItem}
        label={label}
        color={color}
        isSearchable={isSearchable}
        onClear={() => {
          console.log('clear value');
          setStateItem(undefined);
        }}
      />
    </div>
  );
};

export default FilterShowcase;
