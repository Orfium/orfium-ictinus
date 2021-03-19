import React, { FC } from 'react';
import Styles from './AssetMatching.style';
import Card from '../Card';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';
import { Asset } from './components/Asset';
import { AssetProps } from './components/Asset/Asset';

interface Props {
  matchingActions: MatchingAction[];
  leftCustomAsset?: JSX.Element;
  rightCustomAsset?: JSX.Element;
  leftAssetProps?: AssetProps;
  rightAssetProps?: AssetProps;
}

const AssetMatching: FC<Props> = ({
  rightCustomAsset,
  leftCustomAsset,
  rightAssetProps,
  leftAssetProps,
  matchingActions,
}) => {
  const defaultLeft = leftAssetProps && <Asset {...leftAssetProps} />;
  const defaultRight = rightAssetProps && <Asset {...rightAssetProps} highlightBg />;

  return (
    <section css={Styles.section}>
      <Card elevated={'01'}>
        <div css={Styles.inner}>
          <SectionHeader score={95} matchingActions={matchingActions} />
          <div css={Styles.assets}>
            {leftCustomAsset ? leftCustomAsset : defaultLeft}
            {rightCustomAsset ? rightCustomAsset : defaultRight}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AssetMatching;
