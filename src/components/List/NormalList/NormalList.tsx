import { isUndefined } from 'lodash';
import React from 'react';
import { generateUniqueKey } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select/Select';
import { listStyle } from '../List.style';
import ListItem from '../ListItem';
import ListItemGroup from '../ListItemGroup';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { isSelected } from '../utils';

type NormalListProps = {
  items: ListItemType[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  width?: number;
  /** Height of the list */
  height?: number;
  /** Selected Item */
  selectedItem?: ListItemType;
  /** Default option. Renders on top of the list, highlighted */
  defaultOption?: ListItemType;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
  /** Defines if this is a searchable list or not **/
  isSearchable?: boolean;
} & TestProps;

const NormalList = React.forwardRef<HTMLDivElement, NormalListProps>(
  (
    {
      items,
      width,
      height,
      rowSize,
      selectedItem,
      defaultOption,
      isSearchable,
      searchTerm,
      handleOptionClick,
      dataTestId,
    },
    ref
  ) => {
    const newItems = defaultOption ? [defaultOption, ...items] : items;

    return (
      <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
        <ul css={listStyle({ width, height, isSearchable })}>
          {newItems.map((item, index) =>
            (item as SelectOption)?.options ? (
              <ListItemGroup
                key={generateUniqueKey('list_item_group_' + index)}
                content={item}
                size={rowSize}
                groupIndex={index}
                ref={ref}
                searchTerm={searchTerm}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                selectedItem={selectedItem}
              />
            ) : (
              <li key={generateUniqueKey('list_item' + index)}>
                <ListItem
                  content={item}
                  size={rowSize}
                  index={index}
                  ref={ref}
                  isHighlighted={Boolean(defaultOption && index === 0)}
                  searchTerm={searchTerm}
                  isDisabled={(item as SelectOption)?.isDisabled}
                  dataTestId={
                    defaultOption && index === 0
                      ? dataTestId ?? 'ictinus_list' + '_default_option'
                      : dataTestId
                  }
                  handleOptionClick={handleOptionClick}
                  isSelected={
                    defaultOption && index === 0
                      ? isUndefined(selectedItem) ||
                        isSelected({ item: defaultOption, selectedItem })
                      : isSelected({ item, selectedItem })
                  }
                />
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
);
NormalList.displayName = 'NormalList';

export default NormalList;
