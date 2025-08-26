import { CSSObject } from '@emotion/react';
import { default as React } from 'react';
import { TableProps } from '../../types';
export type TBodyProps = Pick<TableProps<any>, 'hasStickyHeader'> & {
    children?: React.ReactNode;
    /** Style overrides */
    sx?: CSSObject;
};
declare const TBody: React.ForwardRefExoticComponent<Pick<TableProps<any>, "hasStickyHeader"> & {
    children?: React.ReactNode;
    /** Style overrides */
    sx?: CSSObject;
} & React.RefAttributes<HTMLTableSectionElement>>;
export default TBody;
