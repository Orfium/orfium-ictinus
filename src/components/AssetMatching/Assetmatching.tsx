import React, { FC } from 'react';
import Styles from './AssetMatching.style';
import Card from '../Card';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';
import { Asset } from './components/Asset';
import { AssetProps } from './components/Asset';
import { SelectedItemProvider } from './components/SelectedItemContext';

interface Props {
  matchingActions: MatchingAction[];
  leftCustomAsset?: JSX.Element;
  rightCustomAsset?: JSX.Element;
  leftAssetProps?: AssetProps;
  rightAssetProps?: AssetProps;
  identicalCategoryItems?: string[];
}

const AssetMatching: FC<Props> = ({
  rightCustomAsset,
  leftCustomAsset,
  rightAssetProps,
  leftAssetProps,
  matchingActions,
  identicalCategoryItems,
}) => {
  const defaultLeft = leftAssetProps && (
    <Asset {...leftAssetProps} identicalCategoryItems={identicalCategoryItems} />
  );
  const defaultRight = rightAssetProps && (
    <Asset {...rightAssetProps} highlightBg identicalCategoryItems={identicalCategoryItems} />
  );

  return (
    <SelectedItemProvider>
      <section css={Styles.section}>
        {/*TODO: add outlined/filled/elevated feature for component*/}
        <Card elevated={'01'}>
          <div css={Styles.inner}>
            <SectionHeader score={95} matchingActions={matchingActions} />
            {/*TODO: add property for identical asset category items*/}
            <div css={Styles.assets}>
              {leftCustomAsset ? leftCustomAsset : defaultLeft}
              {rightCustomAsset ? rightCustomAsset : defaultRight}
            </div>
          </div>
        </Card>
      </section>
    </SelectedItemProvider>
  );
};

export default AssetMatching;
