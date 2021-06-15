import React from 'react';

import NormalList from './NormalList';
import VirtualizedList from './VirtualizedList';

export interface ListProps {
  /** Data for the list */
  data: string[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: 'small' | 'normal';
  /** Width of the list */
  width: number;
  /** Height of the list */
  height: number;
  /** Virtualized list option */
  isVirtualized?: boolean;
  /** Data Test Id Prefix */
  dataTestIdPrefix?: string;
}

const List: React.FC<ListProps> = ({
  data,
  rowSize,
  width,
  height,
  isVirtualized = false,
  dataTestIdPrefix,
}) => {
  return isVirtualized ? (
    <VirtualizedList
      items={data}
      rowSize={rowSize}
      width={width}
      height={height}
      dataTestIdPrefix={dataTestIdPrefix}
    />
  ) : (
    <NormalList
      items={data}
      rowSize={rowSize}
      width={width}
      height={height}
      dataTestIdPrefix={dataTestIdPrefix}
    />
  );
};

export default List;
