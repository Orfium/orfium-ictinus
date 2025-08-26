import { CSSObject } from '@emotion/react';
import { Row } from '@tanstack/react-table';
import { RowSize } from '../types';
type OptimizedTableRowProps<TData> = {
    row: Row<TData>;
    index: number;
    rowSize: RowSize;
    isSelectable: boolean;
    isExpandable: boolean;
    isSelected: boolean;
    isExpanded: boolean;
    sx?: {
        tr?: CSSObject;
        td?: ((originalRow: TData) => CSSObject) | CSSObject;
    };
    dataTestPrefixId: string;
    data: any[];
    allColumnsLength: number;
};
/**
 * OptimizedTableRow - Internal table row component with performance optimizations
 *
 * This component is specifically designed for internal use within the Table component
 * and provides the following optimizations:
 * - Memoized rendering with deep equality checks to prevent unnecessary re-renders
 * - Optimized cell rendering and event handling
 * - Support for selectable and expandable row functionality
 * - Efficient handling of row state changes (selection, expansion)
 *
 * @internal - Not exported as it's tightly coupled to the Table component's architecture
 */
declare const OptimizedTableRow: <TData>({ row, index, rowSize, isSelectable, isExpandable, isSelected, isExpanded, sx, dataTestPrefixId, data, allColumnsLength, }: OptimizedTableRowProps<TData>) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const _default: typeof OptimizedTableRow;
export default _default;
