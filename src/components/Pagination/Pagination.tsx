// @ts-nocheck
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import usePagination from '../../hooks/usePagination';
import useTheme from '../../hooks/useTheme';
import IconButton from '../IconButton';

type Props = {
  /** The current page you are on if you need to control it, defaults to 1 **/
  page: number;
  /** The total pages **/
  count: number;
  /** An onChange callback that will return the page on navigation **/
  onChange?: (page: number) => void;
  /** Hide the enhanced button functionality, this way the jump to first and last page will be hidden **/
  hideEnhancedPaginationButtons?: boolean;
  /** Manually disable next page buttons **/
  nextPageDisabled?: boolean;
  /** Manually disable previous page buttons **/
  prevPageDisabled?: boolean;
};

const Pagination = ({
  page = 1,
  count,
  onChange = () => {},
  hideEnhancedPaginationButtons = false,
  nextPageDisabled,
  prevPageDisabled,
}: Props) => {
  const theme = useTheme();
  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    navigateToFirstPage,
    navigateToLastPage,
    navigateToNextPage,
    navigateToPrevPage,
  } = usePagination({ page, count, onChange });

  return (
    <div
      css={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '> *': { padding: theme.spacing.sm },
      }}
    >
      {!hideEnhancedPaginationButtons && (
        <IconButton
          iconColor={'darkGray'}
          name={'arrowToLeft'}
          onClick={navigateToFirstPage}
          iconSize={24}
          transparent
          filled={false}
          disabled={prevPageDisabled || !hasPrevPage}
        />
      )}
      <IconButton
        iconColor={'darkGray'}
        name={'arrowLeft'}
        iconSize={24}
        transparent
        filled={false}
        onClick={navigateToPrevPage}
        disabled={prevPageDisabled || !hasPrevPage}
      />

      <div>
        page {currentPage} of {count}
      </div>

      <IconButton
        iconColor={'darkGray'}
        name={'arrowRight'}
        iconSize={24}
        transparent
        filled={false}
        onClick={navigateToNextPage}
        disabled={nextPageDisabled || !hasNextPage}
      />
      {!hideEnhancedPaginationButtons && (
        <IconButton
          iconColor={'darkGray'}
          name={'arrowToRight'}
          iconSize={24}
          transparent
          filled={false}
          onClick={navigateToLastPage}
          disabled={nextPageDisabled || !hasNextPage}
        />
      )}
    </div>
  );
};

export default Pagination;
