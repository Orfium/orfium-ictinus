import React, { FC } from 'react';
import Styles from './AssetMatching.style';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';
import { Asset } from './components/Asset';
import { AssetProps } from './components/Asset';
import { SelectedItemProvider } from './components/SelectedItemContext';
import { formFieldStyles } from '../../theme/palette';

interface Props {
  matchingActions: MatchingAction[];
  leftCustomAsset?: JSX.Element;
  rightCustomAsset?: JSX.Element;
  leftAssetProps?: AssetProps;
  rightAssetProps?: AssetProps;
  matchedCategoryItems?: string[];
  styleType?: formFieldStyles;
}

const AssetMatching: FC<Props> = ({
  rightCustomAsset,
  leftCustomAsset,
  rightAssetProps,
  leftAssetProps,
  matchingActions,
  matchedCategoryItems,
  styleType = 'outlined',
}) => {
  const defaultLeft = leftAssetProps && (
    <Asset {...leftAssetProps} matchedCategoryItems={matchedCategoryItems} />
  );
  const defaultRight = rightAssetProps && (
    <Asset {...rightAssetProps} highlightBg matchedCategoryItems={matchedCategoryItems} />
  );

  return (
    <SelectedItemProvider>
      <section css={Styles.section(styleType)}>
        <div css={Styles.inner}>
          <SectionHeader styleType={styleType} score={95} matchingActions={matchingActions} />
          <div css={Styles.assets}>
            {leftCustomAsset ? leftCustomAsset : defaultLeft}
            {rightCustomAsset ? rightCustomAsset : defaultRight}
          </div>
        </div>
      </section>
    </SelectedItemProvider>
  );
};

export default AssetMatching;
