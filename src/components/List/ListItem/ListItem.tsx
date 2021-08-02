import React from 'react';
import Highlighter from 'react-highlight-words';
import { TestProps } from 'utils/types';

import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { listItemStyle, contentStyle } from './ListItem.style';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: ListRowSize;
  /** Content of the ListItem */
  content: ListItemType;
  /** Index, for test-id calculation */
  index: number;
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
    },
    ref
  ) => {
    const handleListItemSelect = () => {
      if (content && handleOptionClick) {
        handleOptionClick(content as never);
      }
    };

    return (
      <div
        css={listItemStyle({ size, selected, highlighted, disabled })}
        ref={selected ? ref : null}
        onClick={handleListItemSelect}
        data-testid={dataTestId ?? 'ictinus_list' + ('_item_' + index)}
      >
        <div css={contentStyle()}>
          {/** @TODO latest version typescript 4.4 is solving this as a constant */
          typeof content === 'string' || typeof content === 'number' ? (
            content
          ) : searchTerm ? (
            <Highlighter
              highlightClassName="search-text"
              highlightTag={'strong'}
              searchWords={[searchTerm]}
              autoEscape={true}
              textToHighlight={content.label}
            />
          ) : (
            content.label
          )}
        </div>
      </div>
    );
  }
);
ListItem.displayName = 'ListItem';

export default ListItem;
