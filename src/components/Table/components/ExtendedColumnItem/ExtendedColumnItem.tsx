import React from 'react';

import useTheme from 'hooks/useTheme';
import { ExtendedColumn, Sort } from '../../types';
import { containerStyles, contentStyles } from './ExtendedColumnItem.style';
import Icon from 'components/Icon';
import Tooltip from 'components/Tooltip';

type Props = {
  item: ExtendedColumn | string;
  isNumerical?: boolean;
  sorting?: Sort;
};

const ExtendedColumnItem: React.FC<Props> = ({ item, sorting, isNumerical }) => {
  const theme = useTheme();

  const sortingItem = () =>
    //TODO: Remove type check when backwards-compatibility is removed
    typeof item !== 'string' &&
    item?.isSortable &&
    (item.content === sorting?.column ? (
      <div
        key={`table_icon_sort_${item.content.toLowerCase()}`}
        css={{
          transition: '0.3s all ease-in-out',
          transformOrigin: 'center',
          width: 'fit-content',
          transform: `rotate(${sorting.order === 'asc' ? '180' : '0'}deg)`,
        }}
      >
        <Icon
          name="triangleDown"
          size={8}
          dataTestId={`table_icon_sort_${item.content.toLowerCase()}_${
            sorting.order === 'desc' ? 'desc' : 'asc'
          }`}
          color={theme.utils.getColor('lightGray', 600)}
        />
      </div>
    ) : (
      <div
        key={`table_icon_sort_${item.content.toLowerCase()}`}
        css={{
          width: 'fit-content',
        }}
      >
        <Icon
          name="genericOrdering"
          size={8}
          dataTestId={`table_icon_sort_${item.content.toLowerCase()}`}
          color={theme.utils.getColor('lightGray', 600)}
        />
      </div>
    ));

  const tooltipItem = () =>
    //TODO: Remove type check when backwards-compatibility is removed
    typeof item !== 'string' &&
    item?.tooltip?.content && (
      <div
        css={{
          width: 'fit-content',
        }}
        key={`table_icon_tooltip_${item.content.toLowerCase()}`}
      >
        <Tooltip
          content={item?.tooltip?.content}
          id={item?.content.replace(' ', '-')}
          placement={item?.tooltip.placement}
        >
          <Icon
            name={'info'}
            dataTestId={`table_icon_tooltip_${item.content.toLowerCase()}`}
            color={theme.utils.getColor('lightGray', 600)}
          />
        </Tooltip>
      </div>
    );

  const renderSortingAndTooltip = () =>
    isNumerical ? [sortingItem(), tooltipItem()] : [tooltipItem(), sortingItem()];

  //TODO: Remove type check when backwards-compatibility is removed
  return typeof item === 'string' ? (
    <div css={contentStyles()}>{item}</div>
  ) : (
    <div data-testid={`header_${item.content.toLowerCase()}`} css={containerStyles('8')}>
      <span css={contentStyles()}>{item.content}</span>

      <div css={containerStyles('4')} key={`header_${item.content.toLowerCase()}_items`}>
        {renderSortingAndTooltip()}
      </div>
    </div>
  );
};

export default ExtendedColumnItem;
