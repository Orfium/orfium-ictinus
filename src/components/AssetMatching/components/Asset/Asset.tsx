import React, { FC } from 'react';
import AssetHeading from './AssetHeading';
import Styles from './Asset.style';
import { Categories } from '../Categories';
import { CategoryType } from '../Categories/Category';
import { AcceptedIconNames } from 'components/Icon/types';
import AssetLinkedInfo from './AssetLinkedInfo';

export interface AssetProps {
  categories: CategoryType[];
  isHighlighted?: boolean;
  assetHeading: {
    top?: string;
    main: string;
    bottom?: string;
    iconName: AcceptedIconNames;
  };
  assetLinkedInfo: {
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
        <AssetLinkedInfo {...assetLinkedInfo} />
      </div>
      <Categories categories={categories} matchedCategoryItems={matchedCategoryItems} />
    </article>
  );
};

export default Asset;
