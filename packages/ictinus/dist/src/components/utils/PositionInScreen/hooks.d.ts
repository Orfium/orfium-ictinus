export declare const usePositionInScreen: (
/** Ref of the parent element */
parentRef: HTMLDivElement | null, 
/** Ref of the item to be positioned */
itemRef: HTMLDivElement | null, 
/** Additional offset-x */
offsetX: number, 
/** Additional offset-y */
offsetY: number, 
/** Whether the item to be positioned is visible */
isVisible?: boolean) => {
    x: number;
    y: number;
    maxHeight: number;
    maxWidth: number;
    isPositioned: boolean;
    calculatePosition: () => void;
    placement: "top" | "bottom";
    triggerWidth: number;
};
export declare const useWrapperWidth: (
/** Whether the item to be positioned uses the parent's wrapper width */
hasWrapperWidth: boolean, 
/** Ref of the wrapper */
wrapperRef: React.MutableRefObject<any>) => (number | undefined)[];
