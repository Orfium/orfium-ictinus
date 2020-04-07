/** @jsx jsx */
import { jsx } from '@emotion/core';
import useTheme from 'hooks/useTheme';
import { useCallback, useState } from 'react';

type Props = {
  page: number;
  count: number;
  onChange?: (page: number) => void;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
};

const Pagination = ({ page = 1, count, onChange = () => {} }: Props) => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(page);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const hasNextPage = nextPage <= count;
  const hasPrevPage = prevPage >= 1;

  const navigateToFirstPage = useCallback(() => {
    const page = 1;
    setCurrentPage(page);
    onChange(page);
  }, []);

  const navigateToLastPage = useCallback(() => {
    setCurrentPage(count);
    onChange(count);
  }, [count]);

  const navigateToNextPage = useCallback(() => {
    setCurrentPage(page => {
      const nextPage = page + 1;

      if (nextPage <= count) {
        return nextPage;
      }

      return page;
    });
    onChange(currentPage);
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

  return (
    <div
      css={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        '> *': { padding: theme.spacing.sm },
      }}
    >
      <div onClick={navigateToFirstPage}>first</div>
      <div
        onClick={navigateToPrevPage}
        aria-disabled={hasPrevPage}
        css={{ color: !hasPrevPage ? theme.palette.gray50 : 'initial' }}
      >
        prev
      </div>

      <div>
        page {currentPage} of {count}
      </div>

      <div
        onClick={navigateToNextPage}
        aria-disabled={hasNextPage}
        css={{ color: !hasNextPage ? theme.palette.gray50 : 'initial' }}
      >
        next
      </div>
      <div onClick={navigateToLastPage}>last</div>
    </div>
  );
};

export default Pagination;
