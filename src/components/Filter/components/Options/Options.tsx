import React from 'react';

import { FilterOption } from '../../types';
import { emptyStyle } from './Options.style';
import { FILTER_OPTIONS_MAX_HEIGHT } from 'components/Filter/utils';
import List from 'components/List';
import { MAX_NON_VIRTUALIZED_ITEMS_FILTER } from 'components/List/utils';

interface Props {
  items: FilterOption[];
  onSelect: (option: FilterOption) => void;
  defaultValue: FilterOption;
  selectedItem?: FilterOption;
  shouldDisplayDefaultOption: boolean;
  isVirtualized?: boolean;
  isSearchable?: boolean;
  dataTestId?: string;
}
const Options: React.FC<Props> = ({
  items,
  onSelect,
  defaultValue,
  selectedItem,
  shouldDisplayDefaultOption,
  isVirtualized,
  isSearchable,
  dataTestId,
}) => {
  const shouldBeVirtualized = items.length > MAX_NON_VIRTUALIZED_ITEMS_FILTER;

  const height = shouldBeVirtualized ? FILTER_OPTIONS_MAX_HEIGHT : undefined;
  const defaultOption = shouldDisplayDefaultOption ? defaultValue : undefined;

  return items.length ? (
    <List
      data={items.filter(option => option.value !== defaultValue.value)}
      rowSize={'small'}
      defaultOption={defaultOption}
      selectedItem={selectedItem}
      isSearchable={isSearchable}
      handleOptionClick={(option: FilterOption) => onSelect(option)}
      isVirtualized={isVirtualized && shouldBeVirtualized}
      height={height}
      dataTestId={dataTestId}
    />
  ) : (
    <div css={emptyStyle()}>No options</div>
  );
};

export default Options;
