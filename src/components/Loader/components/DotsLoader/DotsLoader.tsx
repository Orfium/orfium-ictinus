import React from 'react';
import { generateTestDataId } from 'utils/helpers';

import { dotsContainer } from './DotsLoader.style';

type Props = {
  dataTestId?: string;
};

const DotsLoader: React.FC<Props> = ({ dataTestId }) => {
  return <div css={dotsContainer()} data-testid={generateTestDataId('dots-loading', dataTestId)} />;
};

export default DotsLoader;
