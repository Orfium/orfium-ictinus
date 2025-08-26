import { default as React } from 'react';
declare const Link: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    type?: "primary" | "inverted";
    placement?: "block" | "inline";
    size?: import('./Link.types').LinkSizes;
    iconName?: import('../Icon').AcceptedIconNames;
    isDisabled?: boolean;
    component?: import('prop-types').ReactComponentLike;
    dataTestPrefixId?: string;
} & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
