import React from 'react';

import { loaderContainer } from './Loader.style';
import type { loaderTypes } from './Loader.utils';
import { getLoader } from './Loader.utils';

export type LoaderType = (typeof loaderTypes)[number];

export type LoaderProps = {
  /** Loader type. Defaults to dots **/
  type?: LoaderType;
  /** The data test id if needed */
  dataTestId?: string;
  /** Color of the loader. Define AA color otherwise it gets Primary be default */
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ type = 'dots', dataTestId, color }) => {
  return <div css={loaderContainer()}>{getLoader(type, dataTestId, color)}</div>;
};

export default Loader;
