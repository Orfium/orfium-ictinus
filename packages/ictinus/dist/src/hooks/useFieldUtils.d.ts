import { default as React } from 'react';
import { TextFieldProps } from '../components/TextField';
/** A custom hook containing all the utils that are shared between field components */
declare const useFieldUtils: ({ id, suffix, size, status, isDisabled, ref, }: Partial<TextFieldProps> & {
    ref: React.ForwardedRef<HTMLInputElement>;
}) => {
    isLocked: boolean;
    hintMessageId: string;
    suffixContent: number | boolean | Iterable<React.ReactNode> | import("@emotion/react/jsx-runtime").JSX.Element;
    handleContainerClick: () => void;
    combinedRefs: React.RefObject<HTMLInputElement>;
};
export default useFieldUtils;
