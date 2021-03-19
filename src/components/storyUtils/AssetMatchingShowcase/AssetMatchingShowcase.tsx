import React, { useState } from 'react';
import { MatchingAction } from '../../AssetMatching';
import { uniqueId } from 'lodash';
import AssetMatching from '../../AssetMatching/Assetmatching';

const actionsMock: MatchingAction[] = [
  {
    text: 'Confirm',
    icon: 'check',
    onClick: () => {
      alert('confirmed');
    },
  },
  {
    text: 'Reject',
    icon: 'close',
    onClick: () => {
      alert('rejected');
    },
  },
  {
    text: 'Hide',
    icon: 'sight',
    onClick: () => {
      alert('hidden');
    },
  },
  {
    text: 'Review Later',
    icon: 'clock',
    onClick: () => {
      alert('reviewed');
    },
  },
];

const AssetMatchingShowcase = () => {
  const [matchingActions, setMatchingActions] = useState<MatchingAction[]>(actionsMock);

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
      <AssetMatching matchingActions={matchingActions} />
    </div>
  );
};

export default AssetMatchingShowcase;
