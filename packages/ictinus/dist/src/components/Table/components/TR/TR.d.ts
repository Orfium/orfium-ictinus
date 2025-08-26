import { CSSObject } from '@emotion/react';
import { default as React } from 'react';
import { DivProps } from '../../../../utils/common';
export type TRProps = {
    /** Whether the row is expandable */
    isExpandable?: boolean;
    /** Whether the row is expanded */
    isExpanded?: boolean;
    /** Whether the row is selected */
    isSelected?: boolean;
    /** Whether the row is selectable */
    isSelectable?: boolean;
    /** Style overrides */
    sx?: CSSObject;
};
declare const TR: React.FCC<TRProps & Pick<DivProps, 'onClick'>>;
export default TR;
