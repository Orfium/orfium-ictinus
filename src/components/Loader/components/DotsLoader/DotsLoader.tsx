import React from 'react';
import { generateTestDataId } from 'utils/helpers';

import { dotsContainer, dotsWrapper } from './DotsLoader.style';

type Props = {
  dataTestId?: string;
};

const DotsLoader: React.FC<Props> = ({ dataTestId }) => {
  return (
    <div css={dotsWrapper} data-testid={generateTestDataId('dots-loading', dataTestId)}>
      <div css={dotsContainer()} />
    </div>
  );
};

export default DotsLoader;
