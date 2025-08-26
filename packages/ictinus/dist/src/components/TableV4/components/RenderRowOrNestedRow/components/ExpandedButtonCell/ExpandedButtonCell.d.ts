import { default as React } from 'react';
type ExpandedButtonCellProps = {
    isExpandedExists: boolean;
    isChecked: boolean;
    toggleIsChecked: () => void;
    actionWidth?: number;
    dataTestIdPrefix?: string;
    rowIndex?: number;
    index?: number;
};
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<ExpandedButtonCellProps>>;
export default _default;
