import { default as React } from 'react';
declare const Drawer: React.ForwardRefExoticComponent<{
    isOpen: boolean;
    onClose: () => void;
    anchor?: import('./Drawer.types').AnchorType;
    size?: string;
    isBackgroundActive?: boolean;
    hasFixedLayout?: boolean;
    parent?: HTMLElement | null;
} & import('../..').TestProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default Drawer;
