import React from 'react';
import { Container, Dots } from './Loader.style';

type Props = {
  type?: 'dots';
};

const Loader: React.FC<Props> = ({ type = 'dots' }) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <Dots data-testid="dots-loading" />;
      default:
        return '';
    }
  };

  return <Container>{renderLoader()}</Container>;
};

export default Loader;
