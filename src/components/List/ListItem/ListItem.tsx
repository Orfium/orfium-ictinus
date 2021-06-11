import React from 'react';

import { listItemStyle, contentStyle } from './ListItem.style';

type Props = {
  size: 'normal' | 'small';
  content: string;
  selected?: boolean;
  disabled?: boolean;
  index?: number;
  onSelectOption?: () => void;
  dataTestIdPrefix?: string;
};

const ListItem: React.FC<Props> = ({
  size,
  content,
  selected = false,
  disabled = false,
  index,
  onSelectOption,
  dataTestIdPrefix,
}) => {
  return (
    <div
      css={listItemStyle({ size, selected, disabled })}
      data-testid={dataTestIdPrefix ?? 'list_item' + (index ?? '')}
    >
      <span css={contentStyle()} onClick={onSelectOption}>
        {content}
      </span>
    </div>
  );
};

export default ListItem;
