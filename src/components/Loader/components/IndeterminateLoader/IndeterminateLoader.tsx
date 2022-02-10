import React from 'react';
import { generateTestDataId } from 'utils/helpers';

import {
  LoaderContainer,
  LoaderLine,
  LoaderDecLine,
  LoaderIncLine,
} from './IndeterminateLoader.style';

type Props = {
  dataTestId?: string;
  color?: string;
};

const IndeterminateLoader: React.FC<Props> = ({ dataTestId, color }) => {
  return (
    <div css={LoaderContainer()} data-testid={generateTestDataId('dots-loading', dataTestId)}>
      <div css={LoaderLine()} />
      <div css={LoaderDecLine(color)} />
      <div css={LoaderIncLine(color)} />
    </div>
  );
};

export default IndeterminateLoader;
