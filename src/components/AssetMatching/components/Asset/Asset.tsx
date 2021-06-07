import React, { FC } from 'react';

import { Categories } from '../Categories';
import { CategoryType } from '../Categories/Category';
import Styles from './Asset.style';
import AssetHeading, { AssetHeadingProps } from './AssetHeading';
import AssetLinkedInfo from './AssetLinkedInfo';

export interface AssetProps {
  categories: CategoryType[];
  isHighlighted?: boolean;
  assetHeading: AssetHeadingProps;
  assetLinkedInfo?: {
    title: JSX.Element | string;
    details: string | number;
  };
  matchedCategoryItems?: string[];
}

const Asset: FC<AssetProps> = ({
  matchedCategoryItems,
  isHighlighted = false,
  categories,
  assetHeading,
  assetLinkedInfo,
}) => {
  return (
    <article css={Styles.article(isHighlighted)}>
      <div css={Styles.headingContainer}>
        <AssetHeading {...assetHeading} />
        {assetLinkedInfo && <AssetLinkedInfo {...assetLinkedInfo} />}
      </div>
      <Categories categories={categories} matchedCategoryItems={matchedCategoryItems} />
    </article>
  );
};

export default Asset;
