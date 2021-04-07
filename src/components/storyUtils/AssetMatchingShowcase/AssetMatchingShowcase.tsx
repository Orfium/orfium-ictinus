import React, { useState } from 'react';
import { MatchingAction } from '../../AssetMatching';
import { uniqueId } from 'lodash';
import AssetMatching from '../../AssetMatching/Assetmatching';
import Mocks from './mocks';
import { formFieldStyles } from '../../../theme/palette';
import { rem } from 'polished';

const AssetMatchingShowcase = ({
  showCustomContent,
  styleType,
}: {
  showCustomContent: boolean;
  styleType: formFieldStyles;
}) => {
  const [matchingActions, setMatchingActions] = useState<MatchingAction[]>(Mocks.actionsMock);
  const [checked, setChecked] = useState(false);

  const customShowcase = {
    ...(showCustomContent
      ? { rightCustomAsset: Mocks.customElement }
      : { rightAssetProps: Mocks.rightSideData }),
  };

  const clickHandler = () => {
    const randomText = uniqueId('action_');
    const newAction: MatchingAction = {
      text: randomText,
      icon: 'actions',
      onClick: () => {
        alert(randomText);
      },
    };

    setMatchingActions(prevState => [...prevState, newAction]);
  };

  const checkHandler = () => {
    setChecked(!checked);
  };
  const marginValue = rem(10);

  return (
    <div>
      <button css={{ marginBottom: marginValue, marginRight: marginValue }} onClick={clickHandler}>
        add action
      </button>
      <button onClick={() => setMatchingActions([])}>clear actions</button>
      <button
        css={{ marginBottom: marginValue, marginLeft: marginValue }}
        onClick={() => setMatchingActions(Mocks.actionsMock)}
      >
        reset actions
      </button>
      <button css={{ marginBottom: marginValue, marginLeft: marginValue }} onClick={checkHandler}>
        check from outside
      </button>
      <AssetMatching
        isChecked={checked}
        score={95}
        styleType={styleType}
        matchedCategoryItems={['George Michael']}
        leftAssetProps={Mocks.leftSideData}
        {...customShowcase}
        matchingActions={matchingActions}
      />
    </div>
  );
};

export default AssetMatchingShowcase;
