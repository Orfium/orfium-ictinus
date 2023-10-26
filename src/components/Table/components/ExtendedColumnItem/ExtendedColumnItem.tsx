import useTheme from 'hooks/useTheme';
import React from 'react';

import { containerStyles, contentStyles } from './ExtendedColumnItem.style';
import { ExtendedColumn, Sort } from '../../types';
import { hasTooltipOrSortingKey, isItemString } from '../../utils';
import Icon from 'components/Icon';
import Tooltip from 'components/Tooltip';

export type ExtendedColumnItemProps = {
  item: ExtendedColumn | string;
  isNumerical?: boolean;
  sorting?: Sort;
};

const ExtendedColumnItem: React.FCC<ExtendedColumnItemProps> = ({ item, sorting, isNumerical }) => {
  const theme = useTheme();

  const itemContentLowerCase = !isItemString(item)
    ? item.content.sortingKey.trim().toLowerCase().replace(/ /g, '_')
    : item.trim().toLowerCase().replace(/ /g, '_');

  const sortingItem = () =>
    //TODO: Remove type check when backwards-compatibility is removed
    !isItemString(item) &&
    item?.isSortable &&
    (item.content.sortingKey === sorting?.column ? (
      <div
        key={`table_icon_sort_${itemContentLowerCase}`}
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
          dataTestId={`table_icon_sort_${itemContentLowerCase}_${
            sorting.order === 'desc' ? 'desc' : 'asc'
          }`}
          color={theme.utils.getColor('neutralBlack', 500)}
        />
      </div>
    ) : (
      <div
        key={`table_icon_sort_${itemContentLowerCase}`}
        css={{
          width: 'fit-content',
        }}
      >
        <Icon
          name="genericOrdering"
          size={8}
          dataTestId={`table_icon_sort_${itemContentLowerCase}`}
          color={theme.utils.getColor('lightGrey', 750)}
        />
      </div>
    ));

  const tooltipItem = () =>
    //TODO: Remove type check when backwards-compatibility is removed
    !isItemString(item) &&
    item?.tooltip?.content && (
      <div
        css={{
          width: 'fit-content',
        }}
        key={`table_icon_tooltip_${itemContentLowerCase}`}
      >
        <Tooltip content={item?.tooltip?.content} placement={item?.tooltip.placement}>
          <Icon
            name={'info'}
            dataTestId={`table_icon_tooltip_${itemContentLowerCase}`}
            color={theme.utils.getColor('lightGrey', 750)}
          />
        </Tooltip>
      </div>
    );

  const renderSortingAndTooltip = () =>
    isNumerical ? [sortingItem(), tooltipItem()] : [tooltipItem(), sortingItem()];

  //TODO: Remove type check when backwards-compatibility is removed
  if (isItemString(item)) {
    return <div css={contentStyles()}>{item}</div>;
  }

  if (!hasTooltipOrSortingKey(item)) {
    return <div css={contentStyles()}>{item.content.label}</div>;
  }

  return (
    <div data-testid={`header_${itemContentLowerCase}`} css={containerStyles('8')}>
      <span css={contentStyles()}>{item.content.label}</span>

      <div css={containerStyles('4')}>{renderSortingAndTooltip()}</div>
    </div>
  );
};

export default ExtendedColumnItem;
