import React, { FC } from 'react';
import Styles from './AssetMatching.style';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';
import { Asset } from './components/Asset';
import { AssetProps } from './components/Asset';
import { SelectedItemProvider } from './components/SelectedItemContext';
import { formFieldStyles } from 'theme/palette';
import { OnCheckHandler } from '../../hooks/useCheck';

interface Props {
  /** The score of the matched metadata */
  score?: number | string;
  /** The actions that can be performed for the asset matching section */
  matchingActions: MatchingAction[];
  /** The custom left side of the matching section */
  leftCustomAsset?: JSX.Element;
  /** The custom right side of the matching section */
  rightCustomAsset?: JSX.Element;
  /** The props needed for constructing the default left side of the matching section */
  leftAssetProps?: AssetProps;
  /** The props needed for constructing the default right side of the matching section */
  rightAssetProps?: AssetProps;
  /** The matched items per category for each asset */
  matchedCategoryItems?: string[];
  /** The style type of the matching section */
  styleType?: formFieldStyles;
  /** The provided handler for the selected status of the asset matching */
  onCheck?: OnCheckHandler;
  /** The check status of the asset matching checkbox */
  isChecked?: boolean;
  /** The custom element to pass custom elements to actions toolbox */
  customActionsContent?: JSX.Element | null;
  /** The prop needed for explicitly enabling or disabling checkbox */
  isCheckboxEnabled?: boolean;
}

const AssetMatching: FC<Props> = ({
  score,
  rightCustomAsset,
  leftCustomAsset,
  rightAssetProps,
  leftAssetProps,
  matchingActions,
  matchedCategoryItems,
  styleType = 'outlined',
  onCheck,
  isChecked = false,
  customActionsContent,
  isCheckboxEnabled = true,
}) => {
  const defaultLeft = leftAssetProps && (
    <Asset {...leftAssetProps} matchedCategoryItems={matchedCategoryItems} />
  );
  const defaultRight = rightAssetProps && (
    <Asset {...rightAssetProps} isHighlighted matchedCategoryItems={matchedCategoryItems} />
  );

  return (
    <SelectedItemProvider>
      <section css={Styles.section(styleType)}>
        <div css={Styles.inner}>
          <SectionHeader
            isCheckboxEnabled={isCheckboxEnabled}
            customActionsContent={customActionsContent}
            isChecked={isChecked}
            onCheck={onCheck}
            styleType={styleType}
            score={score}
            matchingActions={matchingActions}
          />
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
