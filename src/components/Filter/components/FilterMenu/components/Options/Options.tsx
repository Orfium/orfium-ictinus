import { flatMap, head } from 'lodash';
import React, { useCallback } from 'react';

import { emptyStyle, optionsStyles } from './Options.style';
import { FILTER_OPTIONS_MAX_HEIGHT } from 'components/Filter/constants';
import type { FilterProps } from 'components/Filter/Filter.types';
import type { ListSelection } from 'components/List';
import List, { ListItem, ListItemText } from 'components/List';
import { MAX_NON_VIRTUALIZED_ITEMS_FILTER } from 'components/List/utils';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

export type Props = Pick<
  FilterProps,
  | 'items'
  | 'onChange'
  | 'defaultValue'
  | 'selectedFilter'
  | 'isSearchable'
  | 'isVirtualized'
  | 'isMulti'
  | 'hasSelectAllOption'
  | 'dataTestPrefixId'
>;

const Options: React.FCC<Props> = ({
  items,
  onChange,
  defaultValue,
  selectedFilter,
  isVirtualized,
  hasSelectAllOption,
  isMulti,
  dataTestPrefixId,
}) => {
  const isForcedVirtualized = items.length > MAX_NON_VIRTUALIZED_ITEMS_FILTER;

  const height = isForcedVirtualized ? FILTER_OPTIONS_MAX_HEIGHT : undefined;

  const onSelectionChange = useCallback(
    (keys: ListSelection) => {
      const keyFound = String(head(Array.from(keys)));
      if (keyFound === SELECT_ALL_OPTION.value) {
        //@ts-ignore
        onChange(SELECT_ALL_OPTION);
      } else {
        const optionFound = flatMap(items, (o) => o.options || o).find(
          (o) => String(o.value) === keyFound
        );
        //@ts-ignore
        if (optionFound) onChange(optionFound);
      }
    },
    [items, onChange]
  );

  return items.length ? (
    <div css={optionsStyles({ isMulti })}>
      <List
        label="filter-options"
        //@ts-ignore
        selectedKeys={!isMulti && selectedFilter ? [selectedFilter.value] : []}
        disabledKeys={items.filter((o) => o.isDisabled).map((o) => o.value)}
        onSelectionChange={onSelectionChange}
        isVirtualized={isVirtualized && isForcedVirtualized}
        height={height}
        dataTestPrefixId={`${dataTestPrefixId}_filter_list`}
      >
        {hasSelectAllOption ? (
          <ListItem key={SELECT_ALL_OPTION.value} textValue={SELECT_ALL_OPTION.label}>
            <ListItemText>{SELECT_ALL_OPTION.label}</ListItemText>
          </ListItem>
        ) : null}
        {items
          .filter((option) => option.value !== defaultValue.value)
          .map((item) => (
            <ListItem key={item.value}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
      </List>
    </div>
  ) : (
    <div css={emptyStyle()} data-testid={`${dataTestPrefixId}_filter_list_no_options`}>
      No options
    </div>
  );
};

export default Options;
