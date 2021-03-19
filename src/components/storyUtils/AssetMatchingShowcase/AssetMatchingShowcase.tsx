import React, { useState } from 'react';
import { MatchingAction } from '../../AssetMatching';
import { uniqueId } from 'lodash';
import AssetMatching from '../../AssetMatching/Assetmatching';
import Mocks from './mocks';

const AssetMatchingShowcase = ({ showCustomContent }: { showCustomContent: boolean }) => {
  const [matchingActions, setMatchingActions] = useState<MatchingAction[]>(Mocks.actionsMock);

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

  return (
    <div>
      <button css={{ marginBottom: 10, marginRight: 10 }} onClick={clickHandler}>
        add action
      </button>
      <button onClick={() => setMatchingActions([])}>clear actions</button>
      <button
        css={{ marginBottom: 10, marginLeft: 10 }}
        onClick={() => setMatchingActions(Mocks.actionsMock)}
      >
        reset actions
      </button>
      <AssetMatching
        leftAssetProps={Mocks.leftSideData}
        {...customShowcase}
        matchingActions={matchingActions}
      />
    </div>
  );
};

export default AssetMatchingShowcase;
