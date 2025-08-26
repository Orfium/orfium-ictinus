import { default as React } from 'react';
import { TestProps } from '../../../../utils/types';
import { ListRowSize } from '../../types';
export type ListItemProps = {
    /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
    isHighlighted?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Search Term to be highlighted in list items */
    searchTerm?: string;
    /** Determines if the item is a header of a section */
    isGroupItem?: boolean;
    /** @default normal **/
    rowSize?: ListRowSize;
} & TestProps & Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value'>;
declare const ListItemWrapper: React.ForwardRefExoticComponent<{
    /** Whether the text of the ListItem is highlighted or not. eg: Filter - Default Value */
    isHighlighted?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Search Term to be highlighted in list items */
    searchTerm?: string;
    /** Determines if the item is a header of a section */
    isGroupItem?: boolean;
    /** @default normal **/
    rowSize?: ListRowSize;
} & TestProps & Omit<React.LiHTMLAttributes<HTMLLIElement>, "value"> & React.RefAttributes<HTMLLIElement>>;
export default ListItemWrapper;
