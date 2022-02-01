import React from 'react';

import { loaderContainer } from './Loader.style';
import { getLoader, loaderTypes } from './Loader.utils';

export type LoaderType = typeof loaderTypes[number];

type Props = {
  /** Loader type. Defaults to dots **/
  type?: LoaderType;
  /** The data test id if needed */
  dataTestId?: string;
  /** Color of the loader. Only applicable to Spinner for now */
  color?: string;
};

const Loader: React.FC<Props> = ({ type = 'dots', dataTestId, color }) => {
  if (Boolean(color) && type !== 'spinner') {
    console.warn(
      'Seems you tried using color prop with something other than Spinner. This is not supported for now! :( '
    );
  }

  return <div css={loaderContainer()}>{getLoader(type, dataTestId, color)}</div>;
};

export default Loader;
