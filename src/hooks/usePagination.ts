import * as React from 'react';

type UsePaginationProps = {
  page: number;
  count: number;
  onChange: (page: number) => void;
};

const usePagination = ({ page = 1, count = 1, onChange: handleChange }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState(page);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const hasNextPage = nextPage <= count;
  const hasPrevPage = prevPage >= 1;

  React.useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const navigateToFirstPage = React.useCallback(() => {
    const page = 1;
    setCurrentPage(page);
    handleChange(page);
  }, [handleChange]);

  const navigateToLastPage = React.useCallback(() => {
    setCurrentPage(count);
    handleChange(count);
  }, [handleChange, count]);

  const navigateToNextPage = React.useCallback(() => {
    let nextPage = currentPage;

    if (nextPage + 1 <= count) {
      nextPage += 1;
    }
    setCurrentPage(nextPage);
    handleChange(nextPage);
  }, [handleChange, count, currentPage]);

  const navigateToPrevPage = React.useCallback(() => {
    let prevPage = currentPage;

    if (prevPage - 1 >= 1) {
      prevPage -= 1;
    }
    setCurrentPage(prevPage);
    handleChange(prevPage);
  }, [handleChange, currentPage]);

  return {
    currentPage,
    hasNextPage,
    hasPrevPage,
    navigateToFirstPage,
    navigateToLastPage,
    navigateToNextPage,
    navigateToPrevPage,
  };
};

export default usePagination;
