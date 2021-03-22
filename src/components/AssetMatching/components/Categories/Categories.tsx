import React, { FC } from 'react';
import Styles from './Categories.style';
import Category, { CategoryType } from './Category';
import { generateUniqueID } from '../../../../utils/helpers';

interface Props {
  categories: CategoryType[];
  matchedCategoryItems?: string[];
}

const Categories: FC<Props> = ({ matchedCategoryItems, categories }) => {
  return (
    <div css={Styles.categories}>
      {categories.map(category => (
        <Category
          key={generateUniqueID('category')}
          category={category}
          matchedCategoryItems={matchedCategoryItems}
        />
      ))}
    </div>
  );
};

export default Categories;
