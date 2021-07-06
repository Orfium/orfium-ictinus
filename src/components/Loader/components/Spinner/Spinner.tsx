import React, { FC } from 'react';
import { spinnerContainer } from './Spinner.style';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';

interface Props {
  dataTestId?: TestId;
}
const Spinner: FC<Props> = ({ dataTestId }) => {
  return <div data-testid={generateTestDataId('spinner', dataTestId)} css={spinnerContainer()} />;
};

export default Spinner;
