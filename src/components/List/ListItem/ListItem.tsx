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
    const handleListItemSelect = () => {
      if (content && handleOptionClick) {
        handleOptionClick(content as never);
      }
    };
    const renderContent = (content: ListItemType) => {
      /**
       * Check if list item is not react element because it can be
       * and also checks if its object with property 'value'
       * @TODO Typescript 4.4 will solve this in one constant
       * **/
      if (
        searchTerm &&
        content &&
        !React.isValidElement(content) &&
        typeof content === 'object' &&
        !Array.isArray(content) &&
        'label' in content &&
        content?.label
      ) {
        return (
          <Highlighter
            highlightClassName="search-text"
            highlightTag={'strong'}
            searchWords={[searchTerm]}
            autoEscape={true}
            textToHighlight={content.label}
          />
        );
      }

      /**
       * Check if list item is not react element because it can be
       * and also checks if its object with property 'value'
       * @TODO Typescript 4.4 will solve this in one constant
       * **/
      if (
        content &&
        !React.isValidElement(content) &&
        typeof content === 'object' &&
        !Array.isArray(content) &&
        'label' in content &&
        content?.label
      ) {
        return content.label;
      }

      return content;
    };

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
          renderContent(content)}
        </div>
      </div>
    );
  }
);
ListItem.displayName = 'ListItem';

export default ListItem;
