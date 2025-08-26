import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { PrimitiveButtonTypes } from '../Button/Button.types';
export declare const wrapperStyle: () => SerializedStyles;
export declare const buttonSpanStyle: ({ type }: {
    type: PrimitiveButtonTypes;
}) => (theme: Theme) => SerializedStyles;
export declare const iconButtonWrapper: ({ isOpen, type }: {
    isOpen: boolean;
    type: PrimitiveButtonTypes;
}) => (theme: Theme) => SerializedStyles;
export declare const iconButtonSpanStyle: ({ isOpen, type }: {
    isOpen: boolean;
    type: PrimitiveButtonTypes;
}) => (theme: Theme) => SerializedStyles;
