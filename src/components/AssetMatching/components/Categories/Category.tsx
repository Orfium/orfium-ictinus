import uniqueId from 'lodash/uniqueId';
import React, { FC } from 'react';

import Styles from './Categories.style';
import CategoryItem from './CategoryItem';

export type CategoryType = { title: string; categoryItems: string[]; col_order?: number };

interface Props {
  category: CategoryType;
  matchedCategoryItems?: string[];
}

const Category: FC<Props> = ({ matchedCategoryItems, category }) => {
  return (
    <div css={Styles.category(category?.col_order)}>
      <h4 css={Styles.title}>{category.title}</h4>
      <div css={Styles.itemsContainer}>
        {category.categoryItems.map(item => {
          return (
            <CategoryItem
              key={uniqueId('category_item')}
              item={item}
              matchedCategoryItems={matchedCategoryItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
