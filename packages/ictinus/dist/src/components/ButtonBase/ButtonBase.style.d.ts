import { SerializedStyles } from '@emotion/react';
import { ButtonBaseProps } from './ButtonBase';
import { Theme } from '../../theme';
export declare const buttonWrapperStyle: ({ isBlock, }: Pick<ButtonBaseProps, "isBlock">) => SerializedStyles;
export declare const buttonBaseStyle: ({ type, size, isBlock, isLoading, isDisabled, isIconButton, shape, sx, }: Omit<ButtonBaseProps, "htmlType" | "ref">) => (theme: Theme) => SerializedStyles;
export declare const buttonSpanStyle: () => () => {
    display: string;
    alignItems: string;
};
export declare const iconStyle: () => () => {
    display: string;
};
