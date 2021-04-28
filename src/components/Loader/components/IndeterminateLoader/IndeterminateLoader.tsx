/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import {
  LoaderContainer,
  LoaderLine,
  LoaderDecLine,
  LoaderIncLine,
} from './IndeterminateLoader.style';
import { generateTestDataId } from 'utils/helpers';
import { jsx } from '@emotion/core';

type Props = {
  dataTestId?: string;
};

const IndeterminateLoader: React.FC<Props> = ({ dataTestId }) => {
  return (
    <div css={LoaderContainer()} data-testid={generateTestDataId('dots-loading', dataTestId)}>
      <div css={LoaderLine()} />
      <div css={LoaderDecLine()} />
      <div css={LoaderIncLine()} />
    </div>
  );
};

export default IndeterminateLoader;
