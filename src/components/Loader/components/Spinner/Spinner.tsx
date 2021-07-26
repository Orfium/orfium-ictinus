import React, { FC } from 'react';

import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';
import { spinnerContainer } from './Spinner.style';

interface Props {
  dataTestId?: TestId;
}
const Spinner: FC<Props> = ({ dataTestId }) => {
  return <div data-testid={generateTestDataId('spinner', dataTestId)} css={spinnerContainer()} />;
};

export default Spinner;
