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

      <div css={containerStyles('4')()}>
        {isNumerical ? (
          <>
            {item?.isSortable &&
              item.content === sorting.column &&
              (sorting.order === 'asc' ? (
                <Icon
                  name="fatArrowUp"
                  dataTestId={`table_icon_sort_${item.content.toLowerCase()}_asc`}
                  color={theme.utils.getColor('lightGray', 600)}
                />
              ) : (
                <Icon
                  name="fatArrowDown"
                  dataTestId={`table_icon_sort_${item.content.toLowerCase()}_desc`}
                  color={theme.utils.getColor('lightGray', 600)}
                />
              ))}

            {item?.tooltipContent && (
              <Icon
                name={'info'}
                dataTestId={`table_icon_tooltip_${item.content.toLowerCase()}`}
                color={theme.utils.getColor('lightGray', 600)}
              />
            )}
          </>
        ) : (
          <>
            {item?.tooltipContent && (
              <Icon
                name={'info'}
                dataTestId={`table_icon_tooltip_${item.content.toLowerCase()}`}
                color={theme.utils.getColor('lightGray', 600)}
              />
            )}

            {item?.isSortable &&
              item.content === sorting.column &&
              (sorting.order === 'asc' ? (
                <Icon
                  name="fatArrowUp"
                  dataTestId={`table_icon_sort_${item.content.toLowerCase()}_asc`}
                  color={theme.utils.getColor('lightGray', 600)}
                />
              ) : (
                <Icon
                  name="fatArrowDown"
                  dataTestId={`table_icon_sort_${item.content.toLowerCase()}_desc`}
                  color={theme.utils.getColor('lightGray', 600)}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExtendedColumnItem;
