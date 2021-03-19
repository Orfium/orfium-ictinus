import React, { FC } from 'react';
import Styles from './Categories.style';
import Category, { CategoryType } from './Category';
import { generateUniqueID } from '../../../../utils/helpers';

interface Props {
  categories: CategoryType[];
}

const Categories: FC<Props> = ({ categories }) => {
  return (
    <div css={Styles.categories}>
      {categories.map(category => (
        <Category key={generateUniqueID('category')} category={category} />
      ))}
    </div>
  );
};

export default Categories;
