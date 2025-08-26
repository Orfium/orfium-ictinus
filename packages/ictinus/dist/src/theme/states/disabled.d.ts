export type GetDisabled = {
    style: {
        opacity: number;
        cursor: string;
    };
    opacity: number;
    cursor: string;
};
/**
 * On disabled opacity is dropped in half and cursor is 'not-allowed'
 * **/
export declare const getDisabled: () => GetDisabled;
