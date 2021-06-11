import React from 'react';

import NormalList from './NormalList';
import VirtualizedList from './VirtualizedList';

type Props = {
  isVirtualized?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = Array.from(new Array(500), (_, index) => 'Item ' + index);

const List: React.FC<Props> = ({ isVirtualized = true }) => {
  return isVirtualized ? (
    <VirtualizedList items={items} width={300} height={300} rowSize={'normal'} />
  ) : (
    <NormalList items={items} width={300} height={300} rowSize={'normal'} />
  );
};

export default List;
