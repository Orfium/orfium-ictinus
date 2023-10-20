import type { FCC } from 'react';
import React from 'react';

import { spinnerContainer } from './Spinner.style';
import { generateTestDataId } from '../../../../utils/helpers';
import type { TestId } from '../../../../utils/types';

export interface Props {
  dataTestId?: TestId;
  color?: string;
}
const Spinner: FCC<Props> = ({ dataTestId, color }) => {
  return (
    <div data-testid={generateTestDataId('spinner', dataTestId)} css={spinnerContainer(color)} />
  );
};

export default Spinner;
