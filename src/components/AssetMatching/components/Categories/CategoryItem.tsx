import React, { FC, useMemo } from 'react';
import Styles from './Categories.style';
import { useCategoryItemActions } from '../utils';

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
