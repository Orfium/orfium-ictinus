import React from 'react';
import { rem } from 'polished';
import SectionHeader from '../../AssetMatching/components/SectionHeader/SectionHeader';
import mocks from './mocks';

const SectionHeaderShowcase = ({ isButtonFilled }: { isButtonFilled: boolean }) => {
  const marginValue = rem(10);

  return (
    <div
      css={{
        marginTop: marginValue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <h2>⬇️Header section can be used separately for handling bulk actions⬇️</h2>
      <SectionHeader
        styleType={'outlined'}
        customCheckboxContent={<span css={{ color: 'black' }}>2 items selected</span>}
        isButtonFilled={isButtonFilled}
        matchingActions={mocks.actionsMock}
      />
    </div>
  );
};

export default SectionHeaderShowcase;
