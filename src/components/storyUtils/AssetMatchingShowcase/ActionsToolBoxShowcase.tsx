import { rem } from 'polished';
import React from 'react';

import ActionsToolbox from '../../AssetMatching/components/ActionsToolbox/ActionsToolbox';
import mocks from './mocks';

const ActionsToolBoxShowcase = ({ isButtonFilled }: { isButtonFilled: boolean }) => {
  const marginValue = rem(10);

  return (
    <div
      css={{
        marginTop: marginValue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>⬇️Toolbox for actions can be used separately for handling bulk actions⬇️</h2>
      <ActionsToolbox isButtonFilled={isButtonFilled} matchingActions={mocks.actionsMock} />
    </div>
  );
};

export default ActionsToolBoxShowcase;
