import { Row } from '../../types';
declare const RenderRowOrNestedRow: {
    <T extends {
        [key: string]: unknown;
    }>({ row, dataTestIdPrefix, rowIndex, isInitiallyExpanded, }: {
        row: Row<T>;
        dataTestIdPrefix?: string;
        rowIndex?: number;
        isInitiallyExpanded: boolean;
    }): import("@emotion/react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const _default: typeof RenderRowOrNestedRow;
export default _default;
