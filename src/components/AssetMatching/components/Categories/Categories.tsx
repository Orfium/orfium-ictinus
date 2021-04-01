import React, { FC } from 'react';
import Styles from './Categories.style';
import Category, { CategoryType } from './Category';
import { generateUniqueID } from 'utils/helpers';

interface Props {
  categories: CategoryType[];
  matchedCategoryItems?: string[];
}

const Categories: FC<Props> = ({ matchedCategoryItems, categories }) => {
  return (
    <div css={Styles.categories}>
      {categories.map((category, index) => {
        const shouldDisplayCategory = !matchedCategoryItems || matchedCategoryItems?.length > 0;
        const keyPrefix = `category_${category.title}_${category.col_order}_${index}`;

        return (
          shouldDisplayCategory && (
            <Category
              key={generateUniqueID(keyPrefix)}
              category={category}
              matchedCategoryItems={matchedCategoryItems}
            />
          )
        );
      })}
    </div>
  );
};

export default Categories;
