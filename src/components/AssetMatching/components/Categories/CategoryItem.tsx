import React, { FC, useMemo } from 'react';
import { useCategoryItemActions } from '../utils';
import Styles from './Categories.style';

const CategoryItem: FC<{ item: string; matchedCategoryItems?: string[] }> = ({
  item,
  matchedCategoryItems,
}) => {
  const { isSelected, onHover, onLeave, itemId, isItemMatched } = useCategoryItemActions(
    item,
    matchedCategoryItems
  );

  return useMemo(
    () => (
      <p
        data-itemid={itemId}
        data-testid={itemId}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        className={isSelected && isItemMatched ? 'selected' : ''}
        css={Styles.item(isItemMatched)}
      >
        {item}
      </p>
    ),
    [isSelected, onLeave, onHover, isItemMatched, itemId, item]
  );
};

export default CategoryItem;
