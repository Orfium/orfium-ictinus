import React from 'react';
import { Item as AriaItem } from 'react-stately';
import type { ListRowSize } from './types';

export type ListItemProps = {
  /** A string representation of the item's unique key. */
  key?: string | number;
  /** A string representation of the item's contents, used when contents are something more than just text to determine labels etc. */
  textValue?: string;
  /** @default normal */
  rowSize?: ListRowSize;
  /** The type of the parent component, usually changed when used on Menus @defaults List */
  parentType?: 'List' | 'Menu';
};
const ListItem: React.FCC<ListItemProps> = (props) => {
  const Component = props.parentType === 'Menu' ? 'div' : AriaItem;

  return (
    <Component {...props} key={String(props.key)}>
      {props.children}
    </Component>
  );
};

// @ts-ignore hack to pass the aria generator to the component as needed
ListItem.getCollectionNode = AriaItem.getCollectionNode;

export default ListItem;
