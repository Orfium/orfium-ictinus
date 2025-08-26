import { default as React } from 'react';
import { ExtendedColumn, Sort } from '../../types';
export type ExtendedColumnItemProps = {
    item: ExtendedColumn | string;
    isNumerical?: boolean;
    sorting?: Sort;
};
declare const ExtendedColumnItem: React.FCC<ExtendedColumnItemProps>;
export default ExtendedColumnItem;
