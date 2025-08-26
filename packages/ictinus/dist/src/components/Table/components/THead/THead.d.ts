import { CSSObject } from '@emotion/react';
import { default as React } from 'react';
import { TableProps } from '../../types';
export type THeadProps = Pick<TableProps<any>, 'hasStickyHeader'> & {
    /** Whether the tbody has a scrollbar. When true, a padding-right is added to the thead in order for the element to align with the tbody correctly  */
    hasScrollbar?: boolean;
    /** Style overrides */
    sx?: CSSObject;
};
declare const THead: React.FCC<THeadProps>;
export default THead;
