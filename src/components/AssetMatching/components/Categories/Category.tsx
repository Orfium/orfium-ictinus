import React, { FC } from 'react';
import Styles from './Categories.style';
import { generateUniqueID } from '../../../../utils/helpers';

export type CategoryType = { title: string; categoryItems: string[] };

interface Props {
  category: CategoryType;
}
const Category: FC<Props> = ({ category }) => {
  return (
    <div css={Styles.category}>
      <h4 css={Styles.title}>{category.title}</h4>
      <div css={Styles.itemsContainer}>
        {category.categoryItems.map(item => (
          <p key={generateUniqueID('category_time')} css={Styles.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
