import React, { FC } from 'react';
import { spinnerContainer } from './Spinner.style';
import { generateTestDataId } from '../../../../utils/helpers';

interface Props {
  dataTestId?: string;
}
const Spinner: FC<Props> = ({ dataTestId }) => {
  return <div data-testid={generateTestDataId('spinner', dataTestId)} css={spinnerContainer()} />;
};

export default Spinner;
