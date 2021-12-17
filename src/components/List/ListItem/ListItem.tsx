import React, { useCallback } from 'react';
import { TestProps } from 'utils/types';

import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { renderContent } from '../utils';
import { listItemStyle, contentStyle } from './ListItem.style';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: ListRowSize;
  /** Content of the ListItem */
  content: ListItemType;
  /** Index, for test-id calculation */
  index: number | string;
  /** Selected state */
  selected?: boolean;
  /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
  highlighted?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
  /** Determines the left padding */
  isGroupItem?: boolean;
} & TestProps;

const ListItem = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      size,
      content,
      index,
      selected = false,
      highlighted = false,
      disabled = false,
      handleOptionClick,
      searchTerm,
      dataTestId,
      isGroupItem,
    },
    ref
  ) => {
    const handleListItemSelect = useCallback(() => {
      if (content && handleOptionClick && !disabled) {
        handleOptionClick(content as never);
      }
    }, [content, disabled, handleOptionClick]);

    return (
      <div
        css={listItemStyle({ size, selected, highlighted, disabled, isGroupItem })}
        ref={selected ? ref : null}
        onClick={handleListItemSelect}
        onMouseDown={event => {
          event.preventDefault();
        }}
        data-testid={dataTestId ?? 'ictinus_list' + ('_item_' + index)}
      >
        <div css={contentStyle()}>
          {/** @TODO latest version typescript 4.4 is solving this as a constant */
          renderContent(content, searchTerm)}
        </div>
      </div>
    );
  }
);
ListItem.displayName = 'ListItem';

export default ListItem;
