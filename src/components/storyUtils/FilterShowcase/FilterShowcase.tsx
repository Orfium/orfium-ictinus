import React from 'react';
import Filter from 'components/Filter';
import { FilterOption, StyleType } from 'components/Filter/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dummyUnrefinedData = Array.from({ length: 15 }, (value, index) => ({
  value: index + 1,
  label: `Test option ${index}`,
}));

interface Props {
  styleType: StyleType;
  color: string;
  items?: Array<FilterOption>;
  label?: string;
  defaultValue?: FilterOption;
  selectedItem?: FilterOption;
  isSearchable?: boolean;
}
const FilterShowcase = ({
  styleType,
  color,
  items = dummyUnrefinedData,
  label = 'Label',
  defaultValue = { value: 18, label: 'Default value' },
  selectedItem,
  isSearchable = false
}: Props) => {
  const [stateItem, setStateItem] = React.useState<FilterOption | undefined>(selectedItem);

  return (
    <div>
      <Filter
        styleType={styleType}
        defaultValue={defaultValue}
        items={items}
        selectedItem={stateItem}
        onSelect={option => setStateItem(option)}
        label={label}
        color={color}
        isSearchable={isSearchable}
      />
    </div>
  );
};

export default FilterShowcase;
