import React, { FCC } from 'react';

import { descriptionStyles, listItemTextWrapperStyles } from './ListItemText.style';

export type ListItemTextProps = {
  description?: string | JSX.Element;
};

const ListItemText: FCC<ListItemTextProps> = (props) => {
  return (
    <div css={listItemTextWrapperStyles(false, false)}>
      <span>{props.children}</span>
      {props.description && <p css={descriptionStyles()}>{props.description}</p>}
    </div>
  );
};

export default ListItemText;
