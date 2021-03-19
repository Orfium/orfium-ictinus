import React, { FC } from 'react';
import Styles from './AssetMatching.style';
import Card from '../Card';
import SectionHeader from './components/SectionHeader/SectionHeader';
import { MatchingAction } from './types';

interface Props {
  matchingActions: MatchingAction[];
}

const AssetMatching: FC<Props> = ({ matchingActions }) => {
  return (
    <section css={Styles.section}>
      <Card elevated={'01'}>
        <div css={Styles.inner}>
          <SectionHeader score={95} matchingActions={matchingActions} />
          {/*TODO: replace div with categories*/}
          <div style={{ height: 300, width: '100%' }} />
        </div>
      </Card>
    </section>
  );
};

export default AssetMatching;
