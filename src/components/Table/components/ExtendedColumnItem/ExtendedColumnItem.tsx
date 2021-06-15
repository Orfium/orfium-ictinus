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

  return (
    <div
      css={containerStyles('8', item.isSortable)}
      onClick={() => {
        if (!item.isSortable) {
          return;
        }

        handleSorting(item.content);
      }}
    >
      {item.content}

      <div css={containerStyles('4')}>
        {isNumerical ? (
          <>
            {item?.isSortable &&
              item.content === sorting.column &&
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

            {item?.isSortable &&
              item.content === sorting.column &&
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
