import type { FC } from 'react';
import React, { useState } from 'react';

import type { TagProps } from 'components/Tag';
import Tag from 'components/Tag';

type Props = Pick<TagProps, 'color' | 'size' | 'iconName'> & {
  text: string;
  type: 'read-only' | 'clearable' | 'selectable';
};

const TagShowcase: FC<Props> = ({ color, size, iconName, type, text }) => {
  const [isSelected, setIsSelected] = useState(false);

  const restProps =
    type === 'clearable'
      ? {
          onClear: () => console.log('clear'),
        }
      : type === 'selectable'
      ? {
          isSelected,
          onSelect: () => setIsSelected((isSelected) => !isSelected),
        }
      : {};

  return (
    <div>
      <Tag color={color} size={size} iconName={iconName} {...restProps}>
        {text}
      </Tag>
    </div>
  );
};

export default TagShowcase;
