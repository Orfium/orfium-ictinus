import { default as React } from 'react';
import { ListRowSize } from './types';
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
declare const ListItem: React.FCC<ListItemProps>;
export default ListItem;
