import React from 'react';

import { loaderContainer } from './Loader.style';
import { getLoader, loaderTypes } from './Loader.utils';

export type LoaderType = typeof loaderTypes[number];

type Props = {
  type?: LoaderType;
  dataTestId?: string;
};

const Loader: React.FC<Props> = ({ type = 'dots', dataTestId }) => {
  return <div css={loaderContainer()}>{getLoader(type, dataTestId)}</div>;
};

export default Loader;
