import React from 'react';

import DotsLoader from './components/DotsLoader';
import IndeterminateLoader from './components/IndeterminateLoader';
import { loaderContainer } from './Loader.style';

type Props = {
  type?: 'dots' | 'indeterminate';
  dataTestId?: string;
};

const Loader: React.FC<Props> = ({ type = 'dots', dataTestId }) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <DotsLoader dataTestId={dataTestId} />;
      case 'indeterminate':
        return <IndeterminateLoader dataTestId={dataTestId} />;
      default:
        return '';
    }
  };

  return <div css={loaderContainer()}>{renderLoader()}</div>;
};

export default Loader;
