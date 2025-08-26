import { CSSObject } from '@emotion/react';
import { Theme } from '../../../theme';
export type MenuPositionAllowed = 'left' | 'right';
export type MenuOptions = {
    menuPosition?: MenuPositionAllowed;
    sx?: CSSObject;
};
export declare const optionsStyle: ({ menuPosition, sx }: MenuOptions) => (theme: Theme) => import('@emotion/utils').SerializedStyles;
