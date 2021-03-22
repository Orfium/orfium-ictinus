import React, { FC } from 'react';
import Styles from './Categories.style';
import uniqueId from 'lodash/uniqueId';
import CategoryItem from './CategoryItem';

export type CategoryType = { title: string; categoryItems: string[] };

interface Props {
  category: CategoryType;
  identicalCategoryItems?: string[];
}

const Category: FC<Props> = ({ identicalCategoryItems, category }) => {
  return (
    <div css={Styles.category}>
      <h4 css={Styles.title}>{category.title}</h4>
      <div css={Styles.itemsContainer}>
        {category.categoryItems.map(item => {
          return (
            <CategoryItem
              key={uniqueId('category_item')}
              item={item}
              identicalCategoryItems={identicalCategoryItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
