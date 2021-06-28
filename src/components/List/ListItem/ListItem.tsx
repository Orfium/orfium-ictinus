import React from 'react';
import Highlighter from 'react-highlight-words';

import { listItemStyle, contentStyle } from './ListItem.style';
import { SelectOption } from '../../Select/Select';
import { TestProps } from 'utils/types';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: 'normal' | 'small';
  /** Content of the ListItem */
  content: string | number | SelectOption;
  /** Index, for test-id calculation */
  index: number;
  /** Selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Ref of ListItem component */
  listItemRef?: React.RefObject<HTMLDivElement>;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
} & TestProps;

const ListItem: React.FC<Props> = ({
  size,
  content,
  index,
  selected = false,
  disabled = false,
  handleOptionClick,
  listItemRef,
  searchTerm,
  dataTestId,
}) => {
  const handleListItemSelect = () => {
    if (
      !(typeof content === 'string' || typeof content === 'number') &&
      content &&
      handleOptionClick
    ) {
      handleOptionClick(content);
    }
  };

  return (
    <div
      css={listItemStyle({ size, selected, disabled })}
      ref={selected ? listItemRef : null}
      onClick={handleListItemSelect}
      data-testid={dataTestId ?? 'ictinus_list' + ('_item_' + index)}
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
