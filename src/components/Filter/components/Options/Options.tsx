import React from 'react';

import { FilterOption } from '../../types';
import { emptyStyle } from './Options.style';
import { FILTER_OPTIONS_MAX_HEIGHT } from 'components/Filter/utils';
import List from 'components/List';
import { MAX_NON_VIRTUALIZED_ITEMS_FILTER } from 'components/List/utils';

export interface Props {
  items: FilterOption[];
  onSelect: (option: FilterOption) => void;
  defaultValue: FilterOption;
  selectedItem?: FilterOption;
  isDefaultOptionVisible: boolean;
  isVirtualized?: boolean;
  isSearchable?: boolean;
  dataTestId?: string;
}
const Options: React.FC<Props> = ({
  items,
  onSelect,
  defaultValue,
  selectedItem,
  isDefaultOptionVisible,
  isVirtualized,
  isSearchable,
  dataTestId,
}) => {
  const isForcedVirtualized = items.length > MAX_NON_VIRTUALIZED_ITEMS_FILTER;

  const height = isForcedVirtualized ? FILTER_OPTIONS_MAX_HEIGHT : undefined;
  const defaultOption = isDefaultOptionVisible ? defaultValue : undefined;

  return items.length ? (
    <List
      data={items.filter((option) => option.value !== defaultValue.value)}
      rowSize={'small'}
      defaultOption={defaultOption}
      selectedItem={selectedItem}
      isSearchable={isSearchable}
      handleOptionClick={(option: FilterOption) => onSelect(option)}
      isVirtualized={isVirtualized && isForcedVirtualized}
      height={height}
      dataTestId={dataTestId}
    />
  ) : (
    <div css={emptyStyle()}>No options</div>
  );
};

export default Options;
