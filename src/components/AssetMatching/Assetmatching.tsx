import React from 'react';
import Styles from './AssetMatching.style';
import Card from '../Card';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';

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

const AssetMatching = () => {
  return (
    <section css={Styles.section}>
      <Card elevated={'01'}>
        <div css={Styles.inner}>
          <SectionHeader score={95} matchingActions={actionsMock} />
          {/*TODO: replace div with categories*/}
          <div style={{ height: 300, width: '100%' }} />
        </div>
      </Card>
    </section>
  );
};

export default AssetMatching;
