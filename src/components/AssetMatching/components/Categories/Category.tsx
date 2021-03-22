import React, { FC } from 'react';
import Styles from './Categories.style';
import uniqueId from 'lodash/uniqueId';
import CategoryItem from './CategoryItem';

export type CategoryType = { title: string; categoryItems: string[] };

interface Props {
  category: CategoryType;
  matchedCategoryItems?: string[];
}

const Category: FC<Props> = ({ matchedCategoryItems, category }) => {
  return (
    <div css={Styles.category}>
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
