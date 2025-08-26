export type PaginationProps = {
    /** The current page you are on if you need to control it, defaults to 1 **/
    page: number;
    /** The total pages **/
    count: number;
    /** An onChange callback that will return the page on navigation **/
    onChange?: (page: number) => void;
    /** Show enhanced button functionality, this way the jump to first and last page will be shown. Default to false **/
    isEnhancedPaginationVisible?: boolean;
    /** Manually disable next page buttons **/
    isNextPageDisabled?: boolean;
    /** Manually disable previous page buttons **/
    isPrevPageDisabled?: boolean;
};
declare const Pagination: ({ page, count, onChange, isEnhancedPaginationVisible, isNextPageDisabled, isPrevPageDisabled, }: PaginationProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Pagination;
