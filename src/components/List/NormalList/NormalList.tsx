import React from 'react';
import { ListBox } from 'react-aria-components';
import { generateUniqueKey } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select';
import { listStyle } from '../List.style';
import ListItem from '../ListItem';
import ListItemGroup from '../ListItemGroup';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';

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

const NormalList = React.forwardRef<HTMLUListElement, NormalListProps>(
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
      ...rest
    },
    ref
  ) => {
    const newItems = defaultOption ? [defaultOption, ...items] : items;

    const selectedOption = newItems.find((item) => item.value === selectedItem?.value);

    return (
      <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
        <ListBox
          ref={ref as React.Ref<HTMLDivElement>}
          css={listStyle({ width, height, isSearchable })}
          selectionMode="single"
          {...rest}
          selectedKeys={
            selectedOption !== undefined && selectedOption !== null
              ? new Set([selectedOption.value])
              : undefined
          }
          disabledKeys={
            new Set(items.filter((option) => option.isDisabled).map((option) => option.value))
          }
          onSelectionChange={(keys) => {
            const optionFound = newItems.find(
              (item) => String(item.value) === String([...keys][0])
            ) as ListItemType;
            optionFound &&
              handleOptionClick &&
              handleOptionClick(
                optionFound.isCreated
                  ? { ...optionFound, label: String(optionFound.value) }
                  : optionFound
              );
          }}
          aria-label={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}
        >
          {newItems.map((item, index) =>
            (item as SelectOption)?.options ? (
              <ListItemGroup
                key={generateUniqueKey('list_item_group_' + index)}
                content={item}
                size={rowSize}
                groupIndex={index}
                searchTerm={searchTerm}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                selectedItem={selectedItem}
              />
            ) : (
              <ListItem
                key={generateUniqueKey('list_item' + index)}
                id={String(item.value)}
                content={item}
                size={rowSize}
                index={index}
                isHighlighted={Boolean(defaultOption && index === 0)}
                searchTerm={searchTerm}
                isDisabled={(item as SelectOption)?.isDisabled}
                dataTestId={
                  defaultOption && index === 0
                    ? dataTestId ?? 'ictinus_list' + '_default_option'
                    : dataTestId
                }
              />
            )
          )}
        </ListBox>
      </div>
    );
  }
);
NormalList.displayName = 'NormalList';

export default NormalList;
