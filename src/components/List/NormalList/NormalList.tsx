import React from 'react';

import ListItem from '../ListItem';
import { generateUniqueID } from 'utils/helpers';
import { listStyle } from './NormalList.style';

type Props = {
  items: string[];
  width: number;
  height: number;
  rowSize: 'normal' | 'small';
  dataTestIdPrefix?: string;
};

const NormalList: React.FC<Props> = ({ items, width, height, rowSize, dataTestIdPrefix }) => {
  return (
    <div data-testid={dataTestIdPrefix ? `${dataTestIdPrefix}_list` : 'ictinus_list'}>
      <ul css={listStyle({ width, height })}>
        {items.map((item, index) => (
          <ListItem
            key={generateUniqueID('list_item')}
            content={item}
            size={rowSize}
            index={index}
            dataTestIdPrefix={dataTestIdPrefix}
          />
        ))}
      </ul>
    </div>
  );
};

export default NormalList;
