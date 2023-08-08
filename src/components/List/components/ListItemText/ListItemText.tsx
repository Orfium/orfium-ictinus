import React, { FC } from 'react';

import { ListItemTextWrapper } from './ListItemText.style';

export type ListItemTextProps = {
  description?: string | JSX.Element;
};

const ListItemText: FC<ListItemTextProps> = (props) => {
  return (
    <ListItemTextWrapper isHighlighted={false}>
      <span>{props.children}</span>
      {props.description && <p>{props.description}</p>}
    </ListItemTextWrapper>
  );
};

export default ListItemText;
