import React from 'react';
import { TestProps } from 'utils/types';

import { contentStyle, listGroupTitleStyle } from './ListGroupTitle.style';
import { ListItemType, ListRowSize } from 'components/List/types';
import { renderContent } from 'components/List/utils';
import { SelectOption } from 'components/Select/Select';

type Props = {
  /** Size of the ListGroupTitle (translates to height) */
  size: ListRowSize;
  /** Content of the ListItem */
  content: ListItemType;
  /** Index, for test-id calculation */
  index: number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
} & TestProps;

const ListGroupTitle: React.FC<Props> = ({ size, content, index, searchTerm, dataTestId }) => {
  return (
    <div
      css={listGroupTitleStyle({ size, isDisabled: (content as SelectOption).isDisabled })}
      data-testid={dataTestId ?? 'ictinus_list' + ('_group_title_' + index)}
    >
      <div css={contentStyle()}>{renderContent(content, searchTerm)}</div>
    </div>
  );
};
ListGroupTitle.displayName = 'ListGroupTitle';

export default ListGroupTitle;
