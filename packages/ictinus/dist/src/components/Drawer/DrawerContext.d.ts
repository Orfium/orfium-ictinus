import { Dispatch, FCC, default as React } from 'react';
declare const SET_HAS_FIXED_LAYOUT = "SET_HAS_FIXED_LAYOUT";
declare const SET_ON_CLOSE = "SET_ON_CLOSE";
declare const TOGGLE_IS_SCROLLBAR_ON_TOP = "TOGGLE_IS_SCROLLBAR_ON_TOP";
declare const TOGGLE_IS_SCROLLBAR_ON_BOTTOM = "TOGGLE_IS_SCROLLBAR_ON_BOTTOM";
export type DrawerContextState = {
    hasFixedLayout?: boolean;
    onClose?: () => void;
    isScrollbarOnTop?: boolean;
    isScrollbarOnBottom?: boolean;
};
export type DrawerContextAction = {
    type: typeof SET_HAS_FIXED_LAYOUT | typeof SET_ON_CLOSE | typeof TOGGLE_IS_SCROLLBAR_ON_BOTTOM | typeof TOGGLE_IS_SCROLLBAR_ON_TOP;
    payload: any;
};
export declare const setHasFixedLayout: (payload: any) => DrawerContextAction;
export declare const setOnClose: (payload: any) => DrawerContextAction;
export declare const toggleIsScrollbarOnTop: (payload: any) => DrawerContextAction;
export declare const toggleIsScrollbarOnBottom: (payload: any) => DrawerContextAction;
export declare const DrawerContext: React.Context<[DrawerContextState, Dispatch<DrawerContextAction>]>;
export type DrawerContextReducer = (state: DrawerContextState, action: DrawerContextAction) => DrawerContextState;
export declare const DrawerContextProvider: FCC<{
    hasFixedLayout?: boolean;
    onClose: () => void;
}>;
export declare const useDrawerContext: () => [DrawerContextState, Dispatch<DrawerContextAction>];
export {};
