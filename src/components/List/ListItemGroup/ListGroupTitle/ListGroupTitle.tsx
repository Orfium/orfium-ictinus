import React from 'react';
import { TestProps } from 'utils/types';

import { contentStyle, listGroupTitleStyle } from './ListGroupTitle.style';
import { ListRowSize } from 'components/List/types';
import { SelectOption } from 'components/Select/Select';

type Props = {
  /** Size of the ListGroupTitle (translates to height) */
  size: ListRowSize;
  /** Content of the ListItem */
  content: SelectOption;
  /** Index, for test-id calculation */
  index: number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
} & TestProps;

const ListGroupTitle = React.forwardRef<HTMLDivElement, Props>(
  ({ size, content, index, dataTestId }, ref) => {
    return (
      <div
        css={listGroupTitleStyle({ size, disabled: content.isDisabled })}
        ref={ref}
        data-testid={dataTestId ?? 'ictinus_list' + ('_group_title_' + index)}
      >
        <div css={contentStyle()}>{content.label}</div>
      </div>
    );
  }
);
ListGroupTitle.displayName = 'ListGroupTitle';

export default ListGroupTitle;
