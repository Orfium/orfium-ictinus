import { Item as AriaItem } from '@react-stately/collections';
import React from 'react';

import { ListRowSize } from './types';

export type ListItemProps = {
  /** A string representation of the item's unique key. */
  key?: string | number;
  /** A string representation of the item's contents, used when contents are something more than just text to determine labels etc. */
  textValue?: string;
  /** @default normal */
  rowSize?: ListRowSize;
};
const ListItem: React.FC<ListItemProps> = (props) => (
  <AriaItem {...props} key={String(props.key)}>
    {props.children}
  </AriaItem>
);

// @ts-ignore hack to pass the aria generator to the component as needed
ListItem.getCollectionNode = AriaItem.getCollectionNode;

export default ListItem;
