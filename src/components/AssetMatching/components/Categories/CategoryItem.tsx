import React, { FC, useMemo } from 'react';
import Styles from './Categories.style';
import { useCategoryItemActions } from '../utils';

const CategoryItem: FC<{ item: string; identicalCategoryItems?: string[] }> = ({
  item,
  identicalCategoryItems,
}) => {
  const { selected, onHover, onLeave, itemId } = useCategoryItemActions(item);
  const itemExistInOtherCategory = useMemo(() => identicalCategoryItems?.includes(item) || false, [
    identicalCategoryItems,
  ]);

  return useMemo(
    () => (
      <p
        data-itemid={itemId}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        className={selected === itemId ? 'selected' : ''}
        css={Styles.item(itemExistInOtherCategory)}
      >
        {item}
      </p>
    ),
    [selected, onLeave, onHover, itemExistInOtherCategory, itemId, item]
  );
};

export default CategoryItem;
