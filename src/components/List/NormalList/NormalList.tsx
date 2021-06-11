import React from 'react';

import ListItem from '../ListItem';
import { generateUniqueID } from 'utils/helpers';

type Props = {
  items: string[];
  width: number;
  height: number;
  rowSize: 'normal' | 'small';
};

const NormalList: React.FC<Props> = ({ items, width, height, rowSize }) => {
  return (
    <div>
      <ul style={{ width: `${width}px`, height: `${height}px` }}>
        {items.map((item, index) => (
          <ListItem
            key={generateUniqueID('list_item')}
            content={item}
            size={rowSize}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default NormalList;
