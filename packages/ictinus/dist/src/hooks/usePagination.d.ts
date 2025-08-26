type UsePaginationProps = {
    page: number;
    count: number;
    onChange: (page: number) => void;
};
declare const usePagination: ({ page, count, onChange: handleChange }: UsePaginationProps) => {
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    navigateToFirstPage: () => void;
    navigateToLastPage: () => void;
    navigateToNextPage: () => void;
    navigateToPrevPage: () => void;
};
export default usePagination;
