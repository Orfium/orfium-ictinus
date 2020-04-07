/** @jsx jsx */
import { jsx } from '@emotion/core';
import useTheme from 'hooks/useTheme';
import usePagination from 'hooks/usePagination';
import Icon from 'components/Icon';

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
        justifyContent: 'space-between',
        '> *': { padding: theme.spacing.sm },
      }}
    >
      <Icon name={'arrowToLeft'} onClick={navigateToFirstPage} size={24} />
      <Icon
        name={'arrowLeft'}
        size={24}
        onClick={navigateToPrevPage}
        aria-disabled={hasPrevPage}
        css={{ color: !hasPrevPage ? theme.palette.gray50 : 'initial' }}
      />

      <div>
        page {currentPage} of {count}
      </div>

      <Icon
        name={'arrowRight'}
        size={24}
        onClick={navigateToNextPage}
        aria-disabled={hasNextPage}
        css={{ color: !hasNextPage ? theme.palette.gray50 : 'initial' }}
      />
      <Icon name={'arrowToRight'} size={24} onClick={navigateToLastPage} />
    </div>
  );
};

export default Pagination;
