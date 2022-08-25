import React from 'react';
import { generateUniqueID } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { listStyle } from '../List.style';
import ListItem from '../ListItem';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { isSelected } from '../utils';
import ListGroupTitle from './ListGroupTitle';
import { SelectOption } from 'components/Select/Select';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: ListRowSize;
  /** Content of the ListItemGroup */
  content: ListItemType;
  /** groupIndex, for test-id calculation */
  groupIndex: number;
  /** Selected Item */
  selectedItem?: ListItemType;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
} & TestProps;

const ListItemGroup = React.forwardRef<HTMLDivElement, Props>(
  ({ size, content, groupIndex, selectedItem, searchTerm, handleOptionClick, dataTestId }, ref) => {
    return (
      <li>
        <ListGroupTitle
          content={content}
          size={size}
          index={groupIndex}
          searchTerm={searchTerm}
          dataTestId={dataTestId}
        />
        <ul css={listStyle({})}>
          {(content as SelectOption).options?.map((option, index) => (
            <li key={generateUniqueID('list_item' + groupIndex + index)}>
              <ListItem
                content={option}
                size={size}
                index={'' + groupIndex + index}
                ref={ref}
                searchTerm={searchTerm}
                isDisabled={option?.isDisabled}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                isSelected={isSelected({ item: option, selectedItem })}
                isGroupItem
              />
            </li>
          ))}
        </ul>
      </li>
    );
  }
);
ListItemGroup.displayName = 'ListItemGroup';

export default ListItemGroup;
