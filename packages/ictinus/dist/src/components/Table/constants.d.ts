import { SortingState } from '@tanstack/react-table';
import { TableColumn, TableRow } from './types';
export declare const ACTIONS_CELL_WIDTH = 52;
export declare const ACTIONS_BAR_HEIGHT = 44;
export type SimpleData = {
    firstName: string;
    lastName: string | undefined;
    age: number | undefined;
    job: string | undefined | JSX.Element;
};
export declare const contentAlignOptions: string[];
export declare const simpleColumns: TableColumn<SimpleData>[];
export declare const groupedColumns: ({
    id: string;
    header: string;
    columns: {
        id: string;
        header: string;
    }[];
} | {
    id: string;
    header: string;
    columns?: undefined;
})[];
export declare const sortDataByKey: (data: any, key: any, order?: string) => any[];
export declare const sortedData: (data: any, sorting: SortingState) => any;
export declare const multiSortDataByKey: (data: any, keys: any) => any;
export declare const simpleData: (isDetailed?: boolean) => TableRow<SimpleData>[];
export declare const moreData: (isDetailed?: boolean) => TableRow<SimpleData>[];
export declare const contentAlignToFlex: {
    left: string;
    center: string;
    right: string;
};
