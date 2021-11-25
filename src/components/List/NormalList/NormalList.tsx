import { isUndefined } from 'lodash';
import React from 'react';
import { generateUniqueID } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select/Select';
import ListItem from '../ListItem';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { isSelected } from '../utils';
import { listStyle } from './NormalList.style';

type Props = {
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
  isSearchable?: boolean;
} & TestProps;

const NormalList = React.forwardRef<HTMLDivElement, Props>(
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
    return (
      <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
        <ul css={listStyle({ width, height, isSearchable })}>
          {defaultOption && (
            <li key={generateUniqueID('list_item')}>
              <ListItem
                content={defaultOption}
                size={rowSize}
                index={0}
                ref={ref}
                highlighted
                dataTestId={dataTestId ?? 'ictinus_list' + '_default_option'}
                handleOptionClick={handleOptionClick}
                disabled={(defaultOption as SelectOption)?.isDisabled}
                selected={
                  isUndefined(selectedItem) || isSelected({ item: defaultOption, selectedItem })
                }
              />
            </li>
          )}
          {items.map((item, index) => (
            <li key={generateUniqueID('list_item' + index)}>
              <ListItem
                content={item}
                size={rowSize}
                index={index}
                ref={ref}
                searchTerm={searchTerm}
                disabled={(item as SelectOption)?.isDisabled}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                selected={isSelected({ item, selectedItem })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
NormalList.displayName = 'NormalList';

export default NormalList;
