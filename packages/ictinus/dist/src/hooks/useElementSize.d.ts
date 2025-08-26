interface Size {
    width: number;
    height: number;
}
declare function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
    (node: T | null) => void,
    Size,
    T | null
];
export default useElementSize;
