import React from 'react';
import { Item } from 'react-aria-components';
import { TestProps } from 'utils/types';

import { listItemStyle, contentStyle } from './ListItem.style';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { RenderContent } from '../utils';

export type ListItemProps = {
  /** Content of the ListItem */
  content: ListItemType;
  /** Selected state */
  isSelected?: boolean;
  /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
  isHighlighted?: boolean;
  /** Disabled state */
  isDisabled?: boolean;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Determines if the item is a header of a section */
  isGroupItem?: boolean;
} & TestProps &
  Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value'>;

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    { content, isDisabled = false, isHighlighted = false, searchTerm, dataTestId, ...rest },
    ref
  ) => {
    return (
      <li
        {...rest}
        css={listItemStyle({ isHighlighted, isDisabled })}
        ref={ref}
        data-testid={String(
          dataTestId ?? content.isDefaultOption
            ? 'ictinus_list' + '_default_option'
            : 'ictinus_list' + ('_item_' + content.value)
        ).replace(/ /g, '_')}
      >
        <div css={contentStyle()}>
          <RenderContent content={content} searchTerm={searchTerm} />
        </div>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export default ListItem;
