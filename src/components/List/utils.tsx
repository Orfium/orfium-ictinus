import React from 'react';
import Highlighter from 'react-highlight-words';

import { listLabel, listLabelHelperText, listLabelWithHelper } from './List.style';
import { ListItemType } from './types';
import { FilterOption } from '../Filter';
import Icon from '../Icon';
import { SelectOption } from '../Select';

/** For this amount of List Items the list of Filter will be non-virtualized */
export const MAX_NON_VIRTUALIZED_ITEMS_FILTER = 6;
export const MAX_NON_VIRTUALIZED_ITEMS_SELECT = 5;

/** Min-max heights for VList */
export const MAX_LARGE_HEIGHT = 277;
export const MAX_SMALL_HEIGHT = 265;

export const isSelected = ({
  item,
  selectedItem,
}: {
  item: ListItemType;
  selectedItem: ListItemType | undefined;
}): boolean => {
  if (item && React.isValidElement(item)) {
    return false;
  }
  const checkIfItemHasValue = (item: ListItemType) => {
    return item.value;
  };
  const itemValue = checkIfItemHasValue(item);
  const selectedItemValue = selectedItem ? checkIfItemHasValue(selectedItem) : null;

  return itemValue === selectedItemValue;
};

const renderLabelWithHelperText = (content: SelectOption | FilterOption) => {
  if (content?.label && 'helperText' in content && content?.helperText) {
    return (
      <div css={listLabelWithHelper}>
        <div css={listLabel}>{content.label}</div>
        <div css={listLabelHelperText}>{content.helperText}</div>
      </div>
    );
  }

  return content.label;
};

export const RenderContent = ({
  content,
  searchTerm,
}: {
  content: ListItemType;
  searchTerm?: string;
}) => {
  if (searchTerm && 'label' in content && content?.label) {
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

  return (
    <>
      <div css={listLabel}>{renderLabelWithHelperText(content)}</div>
      {content?.iconProps && <Icon {...content.iconProps} />}
    </>
  );
};
