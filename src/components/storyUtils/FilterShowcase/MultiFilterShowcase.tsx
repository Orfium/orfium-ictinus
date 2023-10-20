import React, { useState } from 'react';

import type { FilterOption, FilterType, StyleType } from '../..//Filter/types';
import Filter from '../../Filter';

export const dummyUnrefinedData = Array.from({ length: 15 }, (value, index) => ({
  value: index + 1,
  label: `Test option ${index}`,
}));

interface Props {
  styleType: StyleType;
  filterType: FilterType;
  items?: Array<FilterOption>;
  label?: string;
  defaultValue?: FilterOption;
  buttonType?: 'primary' | 'secondary';
  hasSelectAllOption: boolean;
}
const MultiFilterShowcase: React.FCC<Props> = ({
  styleType,
  filterType,
  items = dummyUnrefinedData,
  label = 'Label',
  defaultValue = { value: 18, label: 'Default value' },
  hasSelectAllOption,
  buttonType = 'primary',
}: Props) => {
  const [asyncItems, setAsyncItems] = useState<FilterOption[]>(dummyUnrefinedData);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAsyncSearch = (term: string) => {
    setIsLoading(true);

    return new Promise<FilterOption[]>((resolve) => {
      setTimeout(() => {
        resolve(dummyUnrefinedData);
      }, 1500);
    }).then((values) => {
      const filteredValues = values.filter((option) => option.label.includes(term));

      setAsyncItems(filteredValues);
      setIsLoading(false);
    });
  };

  return (
    <div css={{ height: 200 }}>
      <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '72px' }}>
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          <h4>MultiFilter with simple Search</h4>
          <Filter
            styleType={styleType}
            isMulti
            filterType={filterType}
            defaultValue={defaultValue}
            items={items}
            onSelect={() => {}}
            label={label}
            buttonType={buttonType}
            hasSelectAllOption={hasSelectAllOption}
          />
        </div>
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          <h4>MultiFilter with async Search</h4>
          <Filter
            styleType={styleType}
            isMulti
            onAsyncSearch={handleAsyncSearch}
            filterType={filterType}
            defaultValue={defaultValue}
            items={asyncItems}
            onSelect={() => {}}
            label={label}
            isLoading={isLoading}
            buttonType={buttonType}
            hasSelectAllOption={hasSelectAllOption}
          />
        </div>
        <div css={{ position: 'absolute', bottom: '15%' }}>
          <h4>MultiFilter - Bottom Positioning</h4>
          <Filter
            styleType={styleType}
            isMulti
            filterType={filterType}
            defaultValue={defaultValue}
            items={items}
            onSelect={() => {}}
            label={label}
            buttonType={buttonType}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiFilterShowcase;
