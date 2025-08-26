import { TestProps } from '../../utils/types';
import { ListRowSize } from '../List';
import * as React from 'react';
export type MenuProps = {
    children?: React.ReactNode[] | React.ReactNode;
    /** A callback that is being triggered when selection change */
    onSelectionChange?: (e: Set<string>) => any;
    /** The keys of the items that are disabled */
    disabledKeys?: Set<string>;
    /** The keys of the items that are selected */
    selectedKeys?: Set<string>;
    /** The size of the row */
    rowSize?: ListRowSize;
    /** The ref of the trigger element */
    triggerRef: React.RefObject<any>;
    /** Define if the menu is open or not */
    isOpen?: boolean;
    /** A callback that is being triggered when the menu is closed */
    onClose?: (e: any) => any;
    /** A callback that is being triggered when the menu is acting */
    onAction?: (item: string) => any;
    /** The selection mode of the menu */
    selectionMode?: 'single' | 'multiple';
    sx?: {
        listProps?: {
            maxHeight?: number;
            width?: number;
        };
    };
} & TestProps;
declare const Menu: React.FC<MenuProps>;
export default Menu;
