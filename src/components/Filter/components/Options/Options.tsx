import { flatMap, head } from 'lodash';
import React, { useCallback } from 'react';

import { emptyStyle } from './Options.style';
import { SELECT_ALL_OPTION } from '../../../Select/constants';
import type { FilterOption } from '../../types';
import { FILTER_OPTIONS_MAX_HEIGHT } from 'components/Filter/utils';
import type { ListSelection } from 'components/List';
import List, { ListItem, ListItemText } from 'components/List';
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
const Options: React.FCC<Props> = ({
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
  const onSelectionChange = useCallback(
    (keys: ListSelection) => {
      const keyFound = String(head(Array.from(keys)));
      if (keyFound === SELECT_ALL_OPTION.value) {
        onSelect(SELECT_ALL_OPTION);
      } else {
        const optionFound = flatMap(items, (o) => o.options || o).find(
          (o) => String(o.value) === keyFound
        );
        optionFound && onSelect(optionFound);
      }
    },
    [items, onSelect]
  );

  return items.length || isDefaultOptionVisible ? (
    <List
      label="filter-options"
      selectedKeys={selectedItem ? [selectedItem.value] : []}
      disabledKeys={items.filter((o) => o.isDisabled).map((o) => o.value)}
      onSelectionChange={onSelectionChange}
      isVirtualized={isVirtualized && isForcedVirtualized}
      height={height}
      dataTestId={dataTestId}
    >
      {defaultOption && (
        <ListItem key={defaultOption.value} rowSize="compact">
          <ListItemText>{defaultOption.label}</ListItemText>
        </ListItem>
      )}
      {items
        .filter((option) => option.value !== defaultValue.value)
        .map((item) => (
          <ListItem key={item.value} rowSize="compact">
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        ))}
    </List>
  ) : (
    <div css={emptyStyle()}>No options</div>
  );
};

export default Options;
