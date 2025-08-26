import { default as React } from 'react';
import { TestProps } from '../../../utils/types';
import { TagProps } from '../Tag.types';
declare const useGetTagUtils: ({ color, iconName, onSelect, onClear, isSelected, dataTestPrefixId, }: Pick<TagProps, "iconName" | "color" | "onSelect" | "onClear" | "isSelected"> & TestProps) => {
    isSelectable: boolean;
    isClearable: boolean;
    isInteractive: boolean;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    prefix: import("@emotion/react/jsx-runtime").JSX.Element;
    suffix: import("@emotion/react/jsx-runtime").JSX.Element;
};
export default useGetTagUtils;
