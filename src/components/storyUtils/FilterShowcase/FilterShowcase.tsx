import React from 'react';
import Filter from 'components/Filter';
import { FilterOption, StyleType } from 'components/Filter/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dummyUnrefinedData = Array.from({ length: 15 }, (value, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

interface Props {
  styleType: StyleType;
  color: string;
}
const FilterShowcase = ({ styleType, color }: Props) => {
  const [selectedItem, setSelectedItem] = React.useState<FilterOption>(dummyUnrefinedData[0]);

  return (
    <div>
      <Filter
        styleType={styleType}
        defaultValue={dummyUnrefinedData[0]}
        items={dummyUnrefinedData}
        selectedItem={selectedItem}
        onSelect={option => setSelectedItem(option)}
        label={'Label'}
        color={color}
      />
    </div>
  );
};

export default FilterShowcase;
