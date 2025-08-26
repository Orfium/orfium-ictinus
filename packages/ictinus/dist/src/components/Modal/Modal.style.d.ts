import { SerializedStyles } from '@emotion/react';
import { ModalProps } from './Modal';
import { Theme } from '../../theme';
export declare const backgroundContainer: (theme: Theme) => SerializedStyles;
export declare const cardSizing: (maxWidth: string, maxHeight: string) => SerializedStyles;
export declare const modalContainer: ({ isContentPadded }: Pick<ModalProps, "isContentPadded">) => (theme: Theme) => SerializedStyles;
export declare const closeContainer: (theme: Theme) => SerializedStyles;
