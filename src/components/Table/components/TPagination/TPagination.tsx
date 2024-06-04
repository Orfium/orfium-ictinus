import useTheme from 'hooks/useTheme';

import {
  paginationContainer,
  buttonsContainer,
  itemsPerPageContainer,
  counterWrapper,
  counterContainer,
} from './TPagination.style';
import IconButton from 'components/IconButton';
import Select from 'components/Select';
import type { TableProps } from 'components/Table/types';
import Typography from 'components/Typography';

export type TPaginationProps = Pick<TableProps<any>, 'pagination'> & {
  /** Whether the pagination footer is sticky */
  isSticky?: boolean;
};

const TPagination: React.FC<TPaginationProps> = ({ pagination, isSticky }) => {
  const {
    page,
    totalPages,
    onChange,
    showItems,
    showItemsOptions,
    onShowItemsChange,
    isEnhancedPaginationVisible,
    isNextPageDisabled,
    isPrevPageDisabled,
  } = pagination;
  const theme = useTheme();

  return (
    <div css={paginationContainer({ isSticky })}>
      <div css={itemsPerPageContainer()}>
        {showItems && showItemsOptions && (
          <Select
            label=""
            size="compact"
            options={showItemsOptions}
            selectedOption={showItems}
            isSearchable={false}
            onChange={onShowItemsChange}
          />
        )}
      </div>
      <div css={counterContainer()}>
        <div css={counterWrapper()}>
          <Typography type="secondary" variant="body03">
            page
          </Typography>
          <Typography variant="label03">{page}</Typography>
          <Typography type="secondary" variant="body03">
            of
          </Typography>
          <Typography variant="label03">{totalPages}</Typography>
        </div>
        <div css={buttonsContainer()}>
          {isEnhancedPaginationVisible && (
            <IconButton
              color={theme.tokens.colors.get('textColor.default.secondary')}
              iconName="pageFirst"
              size="compact"
              type="tertiary"
              onClick={() => onChange(1)}
              isDisabled={page === 1 || isPrevPageDisabled}
            />
          )}
          <IconButton
            color={theme.tokens.colors.get('textColor.default.secondary')}
            iconName="chevronLeft"
            size="compact"
            type="tertiary"
            onClick={() => onChange(page - 1)}
            isDisabled={page === 1 || isPrevPageDisabled}
          />
          <IconButton
            color={theme.tokens.colors.get('textColor.default.secondary')}
            iconName="chevronRight"
            size="compact"
            type="tertiary"
            onClick={() => onChange(page + 1)}
            isDisabled={page === totalPages || isNextPageDisabled}
          />
          {isEnhancedPaginationVisible && (
            <IconButton
              color={theme.tokens.colors.get('textColor.default.secondary')}
              iconName="pageLast"
              size="compact"
              type="tertiary"
              onClick={() => onChange(totalPages)}
              isDisabled={page === totalPages || isNextPageDisabled}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TPagination;
