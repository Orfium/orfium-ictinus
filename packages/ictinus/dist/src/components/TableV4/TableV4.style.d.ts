import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../theme';
export declare const tableStyle: () => () => SerializedStyles;
export declare const tableCTAStyle: (isFixed: boolean) => (theme: Theme) => SerializedStyles;
export declare const tableRowHeadersStyle: (hasExpandableRows: boolean, hasOnCheck: boolean, hasFixedHeader: boolean) => (theme: Theme) => SerializedStyles;
