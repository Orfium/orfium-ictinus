import type { FC } from 'react';
import { useState } from 'react';

import { Tag, type TagProps } from '@orfium/ictinus';

type Props = Pick<TagProps, 'color' | 'size' | 'iconName' | 'variant'> & {
  text: string;
  type: 'read-only' | 'clearable' | 'selectable';
};

const TagShowcase: FC<Props> = ({ color, size, iconName, type, text, variant }) => {
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
      <Tag color={color} size={size} iconName={iconName} variant={variant} {...restProps}>
        {text}
      </Tag>
    </div>
  );
};

export default TagShowcase;
