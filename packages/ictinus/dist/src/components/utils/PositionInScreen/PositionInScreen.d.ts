import { CSSObject } from '@emotion/serialize';
import { default as React } from 'react';
export type PositionInScreenProps = {
    id?: string;
    /** Whether the item to be positioned is visible */
    isVisible: boolean;
    /** Function to set the visibility of the item */
    setIsVisible: (visible: boolean) => void;
    /** Whether the overlay is able to interact outside */
    isNonModal?: boolean;
    /** Whether the item to be positioned uses the parent's wrapper width */
    hasWrapperWidth?: boolean;
    /** Additional offset-x */
    offsetX?: number;
    /** Additional offset-y */
    offsetY?: number;
    /** The parent element */
    parent: JSX.Element;
    placement?: 'top' | 'bottom';
    sx?: CSSObject;
};
export declare const PositionInScreen: React.FCC<PositionInScreenProps>;
