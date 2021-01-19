// @ts-nocheck
/** @jsx jsx */
import { jsx } from '@emotion/core';
import usePagination from '../../hooks/usePagination';
import useTheme from '../../hooks/useTheme';
import IconButton from '../IconButton';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';

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
  /** Changes the color of the pagination arrows **/
  arrowColor?: AcceptedColorComponentTypes | string;
};

const Pagination = ({
  page = 1,
  count,
  onChange = () => {},
  hideEnhancedPaginationButtons = false,
  nextPageDisabled,
  prevPageDisabled,
  arrowColor = 'darkGray',
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
          iconColor={arrowColor}
          name={'arrowToLeft'}
          onClick={navigateToFirstPage}
          iconSize={24}
          disabled={prevPageDisabled || !hasPrevPage}
        />
      )}
      <IconButton
        iconColor={arrowColor}
        name={'arrowLeft'}
        iconSize={24}
        onClick={navigateToPrevPage}
        disabled={prevPageDisabled || !hasPrevPage}
      />

      <div>
        page {currentPage} of {count}
      </div>

      <IconButton
        iconColor={arrowColor}
        name={'arrowRight'}
        iconSize={24}
        onClick={navigateToNextPage}
        disabled={nextPageDisabled || !hasNextPage}
      />
      {!hideEnhancedPaginationButtons && (
        <IconButton
          iconColor={arrowColor}
          name={'arrowToRight'}
          iconSize={24}
          onClick={navigateToLastPage}
          disabled={nextPageDisabled || !hasNextPage}
        />
      )}
    </div>
  );
};

export default Pagination;
