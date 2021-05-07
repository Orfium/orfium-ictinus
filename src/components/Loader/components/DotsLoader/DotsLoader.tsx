import React from 'react';
import { dotsContainer } from './DotsLoader.style';
import { generateTestDataId } from 'utils/helpers';

type Props = {
  dataTestId?: string;
};

const DotsLoader: React.FC<Props> = ({ dataTestId }) => {
  return <div css={dotsContainer()} data-testid={generateTestDataId('dots-loading', dataTestId)} />;
};

export default DotsLoader;
