import React, { FC } from 'react';

import { listItemTextWrapperStyles } from './ListItemText.style';

export type ListItemTextProps = {
  description?: string | JSX.Element;
};

const ListItemText: FC<ListItemTextProps> = (props) => {
  return (
    <div css={listItemTextWrapperStyles(false, false)}>
      <span>{props.children}</span>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default ListItemText;
