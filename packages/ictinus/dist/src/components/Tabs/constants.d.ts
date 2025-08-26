import { TabOrientation } from './types';
export declare const getItems: (hasCounter?: boolean) => ({
    counter?: number;
    id: string;
    label: string;
} | {
    counter?: string;
    id: string;
    label: string;
})[];
export declare const getContent: (orientation: TabOrientation) => {
    geller: import("@emotion/react/jsx-runtime").JSX.Element;
    bing: import("@emotion/react/jsx-runtime").JSX.Element;
    tribbiani: import("@emotion/react/jsx-runtime").JSX.Element;
    green: import("@emotion/react/jsx-runtime").JSX.Element;
    buffay: import("@emotion/react/jsx-runtime").JSX.Element;
};
