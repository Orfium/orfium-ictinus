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
    handleChange(currentPage);
  }, [currentPage]);

  const navigateToFirstPage = useCallback(() => {
    const page = 1;
    setCurrentPage(page);
  }, []);

  const navigateToLastPage = useCallback(() => {
    setCurrentPage(count);
  }, [count]);

  const navigateToNextPage = useCallback(() => {
    setCurrentPage(page => {
      const nextPage = page + 1;

      if (nextPage <= count) {
        return nextPage;
      }

      return page;
    });
  }, [count]);

  const navigateToPrevPage = useCallback(() => {
    setCurrentPage(page => {
      const prevPage = page - 1;

      if (prevPage >= 1) {
        return prevPage;
      }

      return page;
    });
  }, []);

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
