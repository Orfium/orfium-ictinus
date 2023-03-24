import React, { useCallback } from 'react';
import { TestProps } from 'utils/types';

import { listItemStyle, contentStyle } from './ListItem.style';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { renderContent } from '../utils';

export type ListItemProps = {
  /** Size of the ListItem (translates to height) */
  size: ListRowSize;
  /** Content of the ListItem */
  content: ListItemType;
  /** Index, for test-id calculation */
  index: number | string;
  /** Selected state */
  isSelected?: boolean;
  /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
  isHighlighted?: boolean;
  /** Disabled state */
  isDisabled?: boolean;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
  /** Determines the left padding */
  isGroupItem?: boolean;
} & TestProps;

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      size,
      content,
      index,
      isSelected = false,
      isHighlighted = false,
      isDisabled = false,
      handleOptionClick,
      searchTerm,
      dataTestId,
      isGroupItem,
    },
    ref
  ) => {
    const handleListItemSelect = useCallback(() => {
      if (content && handleOptionClick && !isDisabled) {
        handleOptionClick(content as never);
      }
    }, [content, isDisabled, handleOptionClick]);

    return (
      <div
        css={listItemStyle({ size, isSelected, isHighlighted, isDisabled, isGroupItem })}
        ref={isSelected ? ref : null}
        onClick={handleListItemSelect}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        data-testid={dataTestId ?? 'ictinus_list' + ('_item_' + index)}
      >
        <div css={contentStyle()}>
          {
            /** @TODO latest version typescript 4.4 is solving this as a constant */
            renderContent(content, searchTerm)
          }
        </div>
      </div>
    );
  }
);
ListItem.displayName = 'ListItem';

export default ListItem;
