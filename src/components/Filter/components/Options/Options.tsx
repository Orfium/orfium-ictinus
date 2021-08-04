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
  dataTestId?: string;
}
const Options: React.FC<Props> = ({
  items,
  onSelect,
  defaultValue,
  selectedItem,
  shouldDisplayDefaultOption,
  isVirtualized,
  dataTestId,
}) => {
  return items.length ? (
    <List
      data={items.filter(option => option.value !== defaultValue.value)}
      rowSize={'small'}
      defaultOption={shouldDisplayDefaultOption ? defaultValue : undefined}
      selectedItem={selectedItem}
      handleOptionClick={(option: FilterOption) => onSelect(option)}
      isVirtualized={isVirtualized && items.length > MAX_NON_VIRTUALIZED_ITEMS_FILTER}
      height={
        items.length > MAX_NON_VIRTUALIZED_ITEMS_FILTER ? FILTER_OPTIONS_MAX_HEIGHT : undefined
      }
      dataTestId={dataTestId}
    />
  ) : (
    <div css={emptyStyle()}>No options</div>
  );
};

export default Options;
