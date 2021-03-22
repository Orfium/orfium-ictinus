import React, { FC } from 'react';
import Styles from './Categories.style';
import Category, { CategoryType } from './Category';
import { generateUniqueID } from '../../../../utils/helpers';

interface Props {
  categories: CategoryType[];
  identicalCategoryItems?: string[];
}

const Categories: FC<Props> = ({ identicalCategoryItems, categories }) => {
  return (
    <div css={Styles.categories}>
      {categories.map(category => (
        <Category
          key={generateUniqueID('category')}
          category={category}
          identicalCategoryItems={identicalCategoryItems}
        />
      ))}
    </div>
  );
};

export default Categories;
