import React from 'react';

import usePagination from '../../hooks/usePagination';
import useTheme from '../../hooks/useTheme';
import IconButton from '../IconButton';

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

const Pagination = ({
  page = 1,
  count,
  onChange = () => {},
  isEnhancedPaginationVisible = false,
  isNextPageDisabled,
  isPrevPageDisabled,
}: PaginationProps) => {
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
        color: theme.utils.getColor('darkGrey', 850),
        '> *': { padding: theme.globals.spacing.get('4') },
      }}
    >
      {isEnhancedPaginationVisible && (
        <IconButton
          color="darkGrey-850"
          name="arrowToLeft"
          onClick={navigateToFirstPage}
          iconSize={20}
          size="sm"
          isTransparent
          isFilled={false}
          isDisabled={isPrevPageDisabled || !hasPrevPage}
        />
      )}
      <IconButton
        color="darkGrey-850"
        name="arrowLeft"
        iconSize={20}
        size="sm"
        isTransparent
        isFilled={false}
        onClick={navigateToPrevPage}
        isDisabled={isPrevPageDisabled || !hasPrevPage}
      />

      <div>
        Page {currentPage} of {count}
      </div>

      <IconButton
        color="darkGrey-850"
        name="arrowRight"
        iconSize={20}
        size="sm"
        isTransparent
        isFilled={false}
        onClick={navigateToNextPage}
        isDisabled={isNextPageDisabled || !hasNextPage}
      />
      {isEnhancedPaginationVisible && (
        <IconButton
          color="darkGrey-850"
          name="arrowToRight"
          iconSize={20}
          size="sm"
          isTransparent
          isFilled={false}
          onClick={navigateToLastPage}
          isDisabled={isNextPageDisabled || !hasNextPage}
        />
      )}
    </div>
  );
};

export default Pagination;
