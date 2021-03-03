import React from 'react';
import { Container, Dots } from './Loader.style';
import { generateTestDataId } from '../../utils/helpers';

type Props = {
  type?: 'dots';
  dataTestId?: string;
};

const Loader: React.FC<Props> = ({ type = 'dots', dataTestId }) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <Dots data-testid={generateTestDataId('dots-loading', dataTestId)} />;
      default:
        return '';
    }
  };

  return <Container>{renderLoader()}</Container>;
};

export default Loader;
