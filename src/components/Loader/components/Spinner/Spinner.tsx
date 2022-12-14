import React, { FC } from 'react';

import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';
import { spinnerContainer } from './Spinner.style';

export interface Props {
  dataTestId?: TestId;
  color?: string;
}
const Spinner: FC<Props> = ({ dataTestId, color }) => {
  return (
    <div data-testid={generateTestDataId('spinner', dataTestId)} css={spinnerContainer(color)} />
  );
};

export default Spinner;
