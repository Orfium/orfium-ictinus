import * as React from 'react';
export type HTMLTagsAllowed = 'div' | 'li' | 'span';
type ClickAwayListenerProps = {
    onClick: () => void;
    CustomHtmlTag?: HTMLTagsAllowed;
    ariaRole?: string;
    cssStyles?: {
        [key: string]: unknown;
    };
};
declare const ClickAwayListener: React.FCC<ClickAwayListenerProps>;
export default ClickAwayListener;
