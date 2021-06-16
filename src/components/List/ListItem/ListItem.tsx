import React from 'react';
import Highlighter from 'react-highlight-words';

import { listItemStyle, contentStyle } from './ListItem.style';
import { SelectOption } from '../../Select/Select';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: 'normal' | 'small';
  /** Content of the ListItem */
  content: string | number | SelectOption;
  /** Selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Index, for test-id calculation */
  index?: number;
  /** Ref of ListItem component */
  listItemRef?: React.RefObject<HTMLDivElement>;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
  /** Data Test Id Prefix */
  dataTestIdPrefix?: string;
};

const ListItem: React.FC<Props> = ({
  size,
  content,
  selected = false,
  disabled = false,
  index,
  handleOptionClick,
  listItemRef,
  searchTerm,
  dataTestIdPrefix,
}) => {

  const handleListItemSelect = () => {
    if (
      !(typeof content === 'string' || typeof content === 'number') &&
      content &&
      handleOptionClick
    ) {
      handleOptionClick(content);
    }
  }


  return (
    <div
      css={listItemStyle({ size, selected, disabled })}
      ref={selected ? listItemRef : null}
      onClick={handleListItemSelect}
      data-testid={dataTestIdPrefix ?? 'ictinus_list' + ('_option' + (index ?? ''))}
    >
      <div css={contentStyle()}>
        {typeof content === 'string' || typeof content === 'number' ? (
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
};

export default ListItem;
