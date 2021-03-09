/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { dotsContainer, loaderContainer } from './Loader.style';
import { generateTestDataId } from '../../utils/helpers';

type Props = {
  type?: 'dots';
  dataTestId?: string;
};

const Loader: React.FC<Props> = ({ type = 'dots', dataTestId }) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return (
          <div css={dotsContainer()} data-testid={generateTestDataId('dots-loading', dataTestId)} />
        );
      default:
        return '';
    }
  };

  return <div css={loaderContainer()}>{renderLoader()}</div>;
};

export default Loader;
