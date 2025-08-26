import { default as React } from 'react';
declare const Tag: React.ForwardRefExoticComponent<Omit<Partial<Omit<React.HTMLProps<HTMLDivElement>, "color" | "css" | "size">> & {
    color?: import('./Tag.types').TagColors;
    size?: import('./Tag.types').TagSizes;
    iconName?: import('../Icon').AcceptedIconNames;
    onSelect?: () => void;
    isSelected?: boolean;
    onClear?: () => void;
} & import('../..').TestProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Tag;
