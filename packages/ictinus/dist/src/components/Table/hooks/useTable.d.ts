import { Column, HeaderGroup, RowModel } from '@tanstack/react-table';
type ReturnValue<TData> = {
    getHeaderGroups: () => HeaderGroup<TData>[];
    getRowModel: () => RowModel<TData>;
    getIsAllRowsSelected: () => boolean;
    getIsSomeRowsSelected: () => boolean;
    getToggleAllRowsSelectedHandler: () => (event: unknown) => void;
    toggleAllRowsSelected: (value: boolean) => void;
    getAllLeafColumns: () => Column<TData, unknown>[];
    getIsAllPageRowsSelected: () => boolean;
    getIsSomePageRowsSelected: () => boolean;
    getToggleAllPageRowsSelectedHandler: () => (event: unknown) => void;
    toggleAllPageRowsSelected: (value: boolean) => void;
};
declare const useTable: <TData>({ type, data, columns, sorting, rowsConfig, columnsConfig, dataTestPrefixId, ...rest }: {
    [x: string]: any;
    type?: string;
    data: any;
    columns: any;
    sorting: any;
    rowsConfig: any;
    columnsConfig: any;
    dataTestPrefixId: any;
}) => ReturnValue<TData>;
export default useTable;
