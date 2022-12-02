import React from 'react';
import { generateTestDataId } from 'utils/helpers';

import { dotsContainer, dotsWrapper } from './DotsLoader.style';

export type DotsLoaderProps = {
  dataTestId?: string;
  color?: string;
};

const DotsLoader: React.FC<DotsLoaderProps> = ({ dataTestId, color }) => {
  return (
    <div css={dotsWrapper} data-testid={generateTestDataId('dots-loading', dataTestId)}>
      <div css={dotsContainer(color)} />
    </div>
  );
};

export default DotsLoader;
