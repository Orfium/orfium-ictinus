import { SelectOption } from './types';
export declare const SELECT_ALL_OPTION: SelectOption;
/** Stories */
export declare const options: ({
    value: string;
    label: string;
    isDisabled?: undefined;
} | {
    value: string;
    label: string;
    isDisabled: boolean;
})[];
export declare const optionsWithHelperInDisabled: ({
    value: string;
    label: string;
    helperText?: undefined;
    isDisabled?: undefined;
} | {
    value: string;
    label: string;
    helperText: string;
    isDisabled: boolean;
})[];
export declare const groupOptions: ({
    value: string;
    label: string;
    options: {
        value: string;
        label: string;
    }[];
} | {
    value: string;
    label: string;
    options?: undefined;
})[];
export declare const defaultValue: {
    value: string;
    label: string;
    isDisabled?: undefined;
} | {
    value: string;
    label: string;
    isDisabled: boolean;
};
