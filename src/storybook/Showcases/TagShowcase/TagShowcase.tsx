import type { FC} from 'react';
import React, { useState } from 'react';

import type { TagProps } from 'components/Tag';
import Tag from 'components/Tag';

type Props = Pick<TagProps, 'color' | 'size' | 'iconName'> & {
  hasIcon?: boolean;
  text: string;
  type: 'read-only' | 'clearable' | 'selectable';
};

const TagShowcase: FC<Props> = ({ color, size, hasIcon, iconName, type, text }) => {
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
      : {
          ...(hasIcon ? { iconName } : {}),
        };

  return (
    <div>
      <Tag color={color} size={size} {...restProps}>
        {text}
      </Tag>
    </div>
  );
};

export default TagShowcase;
