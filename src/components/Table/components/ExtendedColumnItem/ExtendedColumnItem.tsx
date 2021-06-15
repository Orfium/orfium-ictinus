import React from 'react';

import useTheme from 'hooks/useTheme';
import { ExtendedColumn, Sort } from '../../types';
import { containerStyles } from './ExtendedColumnItem.style';
import Icon from 'components/Icon';

type Props = {
  item: ExtendedColumn;
  isNumerical: boolean;
  handleSorting: (column: string) => void;
  sorting: Sort;
};

const ExtendedColumnItem: React.FC<Props> = ({ item, handleSorting, sorting, isNumerical }) => {
  const theme = useTheme();

  const sortingItem = () =>
    item?.isSortable &&
    item.content === sorting.column && (
      <div
        css={{
          transition: '0.3s all ease-in-out',
          transformOrigin: 'center',
          width: 'fit-content',
          transform: `rotate(${sorting.order === 'desc' ? '180' : '0'}deg)`,
        }}
      >
        <Icon
          name="fatArrowUp"
          dataTestId={`table_icon_sort_${item.content.toLowerCase()}`}
          color={theme.utils.getColor('lightGray', 600)}
        />
      </div>
    );

  const tooltipItem = () =>
    item?.tooltipContent && (
      <Icon
        name={'info'}
        dataTestId={`table_icon_tooltip_${item.content.toLowerCase()}`}
        color={theme.utils.getColor('lightGray', 600)}
      />
    );

  const renderSortingAndTooltip = () =>
    isNumerical ? [sortingItem(), tooltipItem()] : [tooltipItem(), sortingItem()];

  return (
    <div
      data-testid={`header_${item.content.toLowerCase()}`}
      css={containerStyles('8', item.isSortable)()}
      onClick={() => {
        if (!item.isSortable) {
          return;
        }

        handleSorting(item.content);
      }}
    >
      {item.content}

      <div css={containerStyles('4')()}>{renderSortingAndTooltip()}</div>
    </div>
  );
};

export default ExtendedColumnItem;
