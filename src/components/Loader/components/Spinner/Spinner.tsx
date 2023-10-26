import React, { FCC } from 'react';

import { spinnerContainer } from './Spinner.style';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';

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
