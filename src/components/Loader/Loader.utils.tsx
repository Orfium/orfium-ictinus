import React from 'react';
import DotsLoader from './components/DotsLoader';
import IndeterminateLoader from './components/IndeterminateLoader';
import { Spinner } from './components/Spinner';
import { LoaderType } from './Loader';

export const loaderTypes = ['dots', 'indeterminate', 'spinner'] as const;

const loadersConfig = (dataTestId?: string): Record<LoaderType, JSX.Element> => ({
  dots: <DotsLoader dataTestId={dataTestId} />,
  indeterminate: <IndeterminateLoader dataTestId={dataTestId} />,
  spinner: <Spinner dataTestId={dataTestId} />,
});

export const getLoader = (type?: LoaderType, dataTestId?: string) => {
  if (!type) {
    return null;
  }

  return loadersConfig(dataTestId)[type];
};
