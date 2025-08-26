import { Theme } from 'theme';
import { ExtendedColumn } from '../types';
export declare const isItemString: (prop: string | ExtendedColumn) => prop is string;
export declare const hasTooltipOrSortingKey: (prop: ExtendedColumn) => boolean;
export declare const getBorderColor: (theme: Theme) => string;
