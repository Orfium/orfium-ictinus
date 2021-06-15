import React from 'react';

import { listItemStyle, contentStyle } from './ListItem.style';

type Props = {
  /** Size of the ListItem (translates to height) */
  size: 'normal' | 'small';
  /** Content of the ListItem */
  content: string;
  /** Selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Index, for test-id calculation */
  index?: number;
  /** ListItem select handler */
  onSelectOption?: () => void;
  /** Data Test Id Prefix */
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
      data-testid={dataTestIdPrefix ?? 'ictinus_list' + ('_option' + (index ?? ''))}
    >
      <span css={contentStyle()} onClick={onSelectOption}>
        {content}
      </span>
    </div>
  );
};

export default ListItem;
