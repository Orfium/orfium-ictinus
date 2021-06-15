import React from 'react';

import Icon from 'components/Icon';
import useTheme from 'hooks/useTheme';
import { ExtendedColumn, SortingOrder } from '../../types';
import { containerStyles } from './ExtendedColumnItem.style';

type Props = {
  item: ExtendedColumn;
  isNumerical: boolean;
  handleSorting: (name: string, order: SortingOrder) => void;
  sorting: {
    name: string;
    order: SortingOrder;
  };
};

const ExtendedColumnItem: React.FC<Props> = ({ item, handleSorting, sorting, isNumerical }) => {
  const theme = useTheme();

  return (
    <div
      css={containerStyles('8')}
      onClick={() => {
        if (!item.initialSortOrder) {
          return;
        }

        handleSorting(item.content, item.initialSortOrder ?? 'asc');
      }}
    >
      {item.content}

      <div css={containerStyles('4')}>
        {isNumerical ? (
          <>
            {item?.initialSortOrder &&
              item.content === sorting.name &&
              (sorting.order === 'asc' ? (
                <Icon name="fatArrowUp" color={theme.utils.getColor('lightGray', 600)} />
              ) : (
                <Icon name="fatArrowDown" color={theme.utils.getColor('lightGray', 600)} />
              ))}

            {item?.tooltipContent && (
              <Icon name={'info'} color={theme.utils.getColor('lightGray', 600)} />
            )}
          </>
        ) : (
          <>
            {item?.tooltipContent && (
              <Icon name={'info'} color={theme.utils.getColor('lightGray', 600)} />
            )}

            {item?.initialSortOrder &&
              item.content === sorting.name &&
              (sorting.order === 'asc' ? (
                <Icon name="fatArrowUp" color={theme.utils.getColor('lightGray', 600)} />
              ) : (
                <Icon name="fatArrowDown" color={theme.utils.getColor('lightGray', 600)} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExtendedColumnItem;
