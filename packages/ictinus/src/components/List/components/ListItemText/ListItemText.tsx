import type { FC } from 'react';
import React from 'react';

import { descriptionStyles, listItemTextWrapperStyles } from './ListItemText.style';

export type ListItemTextProps = {
  description?: string | JSX.Element;
};

const ListItemText: FC<React.PropsWithChildren<ListItemTextProps>> = (props) => {
  return (
    <div css={listItemTextWrapperStyles(false, false)}>
      <span>{props.children}</span>
      {props.description && <p css={descriptionStyles()}>{props.description}</p>}
    </div>
  );
};

export default ListItemText;
