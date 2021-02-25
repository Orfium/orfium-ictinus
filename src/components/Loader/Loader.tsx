import React from 'react';
import { Container, Dots } from './Loader.style';

type Props = {
  type?: 'linear' | 'spinner' | 'dots';
};

const Loader: React.FC<Props> = ({ type = 'dots' }) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <Dots />;
      case 'linear':
      case 'spinner':
      default:
        return '';
    }
  };

  return <Container>{renderLoader()}</Container>;
};

export default Loader;
