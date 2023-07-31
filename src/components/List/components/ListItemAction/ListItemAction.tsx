import React, { FC } from 'react';

import { listItemActionWrapper } from './ListItemAction.style';

export type ListItemActionProps = {};

const ListItemAction: FC<ListItemActionProps> = (props) => {
  return <div css={listItemActionWrapper()}>{props.children}</div>;
};

export default ListItemAction;
