/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { dotsContainer, dotsWrapper } from './DotsLoader.style';
import { generateTestDataId } from 'utils/helpers';
import { jsx } from '@emotion/core';

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
