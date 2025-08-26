import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { TextInputBaseProps } from './TextInputBase';
/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * in custom implementation needed eg: datepicker
 * */
export declare const wrapperStyle: ({ isDisabled, status, isInteractive, size, sx }: Partial<TextInputBaseProps>) => (theme: Theme) => SerializedStyles;
export declare const textFieldStyle: ({ sx }: Partial<TextInputBaseProps>) => (theme: Theme) => SerializedStyles;
export declare const inputStyle: ({ label, placeholder, size, isLocked, isDisabled, sx, }: Partial<TextInputBaseProps> & {
    isLocked?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const hintMessageStyle: ({ status, isDisabled }: Partial<TextInputBaseProps>) => (theme: Theme) => SerializedStyles;
