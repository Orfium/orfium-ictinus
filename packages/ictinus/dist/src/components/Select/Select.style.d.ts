import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../theme';
export declare const selectWrapper: () => (theme: Theme) => SerializedStyles;
export declare const suffixContainer: (isOpen: boolean, isSearchable: boolean) => () => SerializedStyles;
