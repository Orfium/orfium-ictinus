import { default as React } from 'react';
import { TextFieldProps } from '../TextField/TextField';
import { SelectOption } from '../Select';
import { Props as MultiTextFieldBase } from './MultiTextFieldBase';
type Props = {
    hasValue: boolean;
    isTextfield?: boolean;
} & Pick<MultiTextFieldBase, 'value' | 'onOptionDelete' | 'onClearAllOptions'> & Omit<TextFieldProps, 'size'>;
declare const useMultiTextFieldBaseUtils: ({ isTextfield, label, placeholder, isRequired, isLocked, hasValue, value, onOptionDelete, onClearAllOptions, onKeyDown, }: Props & {
    isLocked: boolean;
}) => {
    inputPlaceholder: string;
    handleKeyDown: (option?: SelectOption | string) => (event: React.KeyboardEvent<HTMLInputElement>) => void;
    icon: import("@emotion/react/jsx-runtime").JSX.Element;
    hasLabel: boolean;
    TextfieldRef: React.MutableRefObject<HTMLDivElement>;
};
export default useMultiTextFieldBaseUtils;
