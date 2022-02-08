import React from 'react';

import DotsLoader from './components/DotsLoader';
import IndeterminateLoader from './components/IndeterminateLoader';
import { Spinner } from './components/Spinner';
import { LoaderType } from './Loader';

export const loaderTypes = ['dots', 'indeterminate', 'spinner'] as const;

const loadersConfig = (dataTestId?: string, color?: string): Record<LoaderType, JSX.Element> => ({
  dots: <DotsLoader dataTestId={dataTestId} color={color} />,
  indeterminate: <IndeterminateLoader dataTestId={dataTestId} color={color} />,
  spinner: <Spinner dataTestId={dataTestId} color={color} />,
});

export const getLoader = (type?: LoaderType, dataTestId?: string, color?: string) => {
  if (!type) {
    return null;
  }

  return loadersConfig(dataTestId, color)[type];
};
