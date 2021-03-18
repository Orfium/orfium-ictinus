import React from 'react';
import Styles from './AssetMatching.style';
import Card from '../Card';
import SectionHeader from './components/SectionHeader/SectionHeader';

const AssetMatching = () => {
  return (
    <section css={Styles.section}>
      <Card elevated={'01'}>
        <SectionHeader score={95} />
      </Card>
    </section>
  );
};

export default AssetMatching;
