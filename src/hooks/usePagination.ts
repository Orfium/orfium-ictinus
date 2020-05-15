import { useCallback, useEffect, useState } from 'react';

type Props = {
  page: number;
  count: number;
  onChange: (page: number) => void;
};

const usePagination = ({ page = 1, count = 1, onChange: handleChange }: Props) => {
  const [currentPage, setCurrentPage] = useState(page);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const hasNextPage = nextPage <= count;
  const hasPrevPage = prevPage >= 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const navigateToFirstPage = useCallback(() => {
    const page = 1;
    setCurrentPage(page);
    handleChange(page);
  }, []);

  const navigateToLastPage = useCallback(() => {
    setCurrentPage(count);
    handleChange(count);
  }, [count]);

  const navigateToNextPage = useCallback(() => {
    let nextPage = currentPage;

    if (nextPage + 1 <= count) {
      nextPage += 1;
    }
    setCurrentPage(nextPage);
    handleChange(nextPage);
  }, [count, currentPage]);

  const navigateToPrevPage = useCallback(() => {
    let prevPage = currentPage;

    if (prevPage - 1 >= 1) {
      prevPage -= 1;
    }
    setCurrentPage(prevPage);
    handleChange(prevPage);
  }, [currentPage]);

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
