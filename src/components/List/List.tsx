import { Item, Section } from '@react-stately/collections';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { TestProps } from 'utils/types';

import { listStyle, wrapperStyle } from './List.style';
import { ListBox } from './ListBox';
import { ListItemType, ListRowSize, SelectHandlerType } from './types';
import { SelectOption } from '../Select';

export type ListProps = {
  /** Data for the list */
  data: ListItemType[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  width?: number;
  /** Height of the list when you use it as virtualized */
  height?: number;
  /** Virtualized list option */
  isVirtualized?: boolean;
  /** Selected Item */
  selectedItem?: ListItemType;
  /** Default option. Renders on top of the list, highlighted - for Filter component */
  defaultOption?: ListItemType;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
  /** Defines if this is searchable list or not **/
  isSearchable?: boolean;
} & TestProps &
  React.InputHTMLAttributes<HTMLUListElement>;

const List = React.forwardRef<HTMLUListElement, ListProps>(
  (
    {
      data,
      rowSize,
      width,
      height,
      isVirtualized = false,
      selectedItem,
      isSearchable,
      defaultOption,
      searchTerm,
      handleOptionClick,
      dataTestId,
      ...rest
    },
    ref
  ) => {
    const newItems = defaultOption ? [{ ...defaultOption, isDefaultOption: true }, ...data] : data;

    const selectedOption = newItems.find((item) => item.value === selectedItem?.value);

    return (
      <div css={wrapperStyle({ width, isSearchable })}>
        <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
          <ListBox
            ref={ref as React.Ref<HTMLUListElement>}
            selectionMode="single"
            items={newItems.map((item) => ({ ...item, id: item.value }))}
            // @ts-ignore // hack to work skip the logic
            isVirtualized={true}
            isVirtualizationEnabled={isVirtualized}
            css={listStyle({ width, height, isSearchable })}
            height={height}
            {...rest}
            selectedKeys={
              selectedOption !== undefined && selectedOption !== null
                ? new Set([selectedOption.value])
                : undefined
            }
            disabledKeys={
              new Set(data.filter((option) => option.isDisabled).map((option) => option.value))
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
            {/* This has to be part of Aria collection. That is why we use explicit Item component from Aria*/}
            {(item: SelectOption) => {
              return item.options && item.options.length > 0 ? (
                <Section key={item.value} items={item.options} title={item.label}>
                  {/*{(item: SelectOption) => <Item>{item.label}</Item>}*/}
                  {item.options.map((sectionItem) => (
                    <Item key={sectionItem.value}>{sectionItem.label}</Item>
                  ))}
                </Section>
              ) : (
                <Item key={item.value}>{item.label}</Item>
              );
            }}
          </ListBox>
        </div>
      </div>
    );
  }
);
List.displayName = 'List';

export default memo(List, isEqual);
