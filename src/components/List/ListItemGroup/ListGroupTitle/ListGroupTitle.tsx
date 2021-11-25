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
} & TestProps;

const ListGroupTitle = React.forwardRef<HTMLDivElement, Props>(({ size, content }) => {
  return (
    <div css={listGroupTitleStyle({ size, disabled: content.isDisabled })}>
      <div css={contentStyle()}>{content.label}</div>
    </div>
  );
});
ListGroupTitle.displayName = 'ListGroupTitle';

export default ListGroupTitle;
