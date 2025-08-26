import { default as React } from 'react';
import { AriaListBoxProps } from 'react-aria';
import { TestProps } from '../../utils/types';
import { SelectOption } from '../Select';
import { ListSelected, ListSelection } from './types';
export type ListProps = {
    /** The label that describes the List, useful to determine aria and accessibility of the list  */
    label: string;
    /** Width of the list */
    width?: number;
    /** Height of the list when you use it as virtualized */
    height?: number;
    /** Virtualized list option */
    isVirtualized?: boolean;
    /** Callback when an item gets a change */
    onSelectionChange?: (keys: ListSelection) => unknown;
    /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
    disabledKeys?: ListSelected;
    /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
    selectedKeys?: ListSelected;
} & Omit<AriaListBoxProps<SelectOption>, 'selectionMode' | 'onSelectionChange' | 'children'> & TestProps & Omit<React.InputHTMLAttributes<HTMLUListElement>, 'onChange'>;
/**
 * This is the List component that uses the Window underneath for every UL.
 * Because this component uses the React-Aria abstraction for the List it will also contain the Option and ListBoxSection below
 * as a masked layer to the actual subcomponents
 * */
declare const List: React.ForwardRefExoticComponent<{
    /** The label that describes the List, useful to determine aria and accessibility of the list  */
    label: string;
    /** Width of the list */
    width?: number;
    /** Height of the list when you use it as virtualized */
    height?: number;
    /** Virtualized list option */
    isVirtualized?: boolean;
    /** Callback when an item gets a change */
    onSelectionChange?: (keys: ListSelection) => unknown;
    /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
    disabledKeys?: ListSelected;
    /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
    selectedKeys?: ListSelected;
} & Omit<AriaListBoxProps<SelectOption>, "children" | "selectionMode" | "onSelectionChange"> & TestProps & Omit<React.InputHTMLAttributes<HTMLUListElement>, "onChange"> & React.RefAttributes<HTMLUListElement>>;
export default List;
