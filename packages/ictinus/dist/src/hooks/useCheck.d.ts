import { ChangeEvent } from 'react';
export type OnCheckHandler = (val: boolean, e?: ChangeEvent) => void;
export declare const useCheck: (isChecked: boolean, onCheck?: OnCheckHandler) => {
    isCheckedState: boolean;
    handleCheck: (isChecked: boolean, e: ChangeEvent) => void;
};
