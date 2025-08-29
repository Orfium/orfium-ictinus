import type { FCC } from 'react';
import React from 'react';

import { listItemActionWrapper } from './ListItemAction.style';

export type ListItemActionProps = NonNullable<unknown>;

const ListItemAction: FCC<ListItemActionProps> = (props) => {
  return <div css={listItemActionWrapper()}>{props.children}</div>;
};

export default ListItemAction;
