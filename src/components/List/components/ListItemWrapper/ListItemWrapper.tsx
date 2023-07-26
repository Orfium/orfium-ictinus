import React from 'react';
import { TestProps } from 'utils/types';

import { listItemWrapperStyle } from './ListItemWrapper.style';
import { ListRowSize } from '../../types';

export type ListItemProps = {
  /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
  isHighlighted?: boolean;
  /** Disabled state */
  isDisabled?: boolean;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Determines if the item is a header of a section */
  isGroupItem?: boolean;
  /** @default normal **/
  rowSize?: ListRowSize;
} & TestProps &
  Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value'>;

const ListItemWrapper = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      rowSize,
      isDisabled = false,
      isHighlighted = false,
      searchTerm,
      dataTestId,
      ...rest
    },
    ref
  ) => {
    return (
      <li
        {...rest}
        css={listItemWrapperStyle({ rowSize, isDisabled })}
        ref={ref}
        // data-testid={String(
        //   dataTestId ?? content.isDefaultOption
        //     ? 'ictinus_list' + '_default_option'
        //     : 'ictinus_list' + ('_item_' + content.value)
        // ).replace(/ /g, '_')}
      >
        {children}
      </li>
    );
  }
);
ListItemWrapper.displayName = 'ListItem';

export default ListItemWrapper;
