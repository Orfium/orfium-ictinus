import { SerializedStyles } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';
import { TextAreaProps } from './TextArea';
import { Theme } from '../../theme';
export declare const sxProp: ({ isResizeEnabled }: Partial<TextAreaProps>) => (theme: Theme) => {
    wrapper: CSSObject;
    textField: CSSObject;
    input: CSSObject;
};
export declare const hintMessageStyle: ({ isDisabled }: Pick<TextAreaProps, "isDisabled">) => (theme: Theme) => SerializedStyles;
