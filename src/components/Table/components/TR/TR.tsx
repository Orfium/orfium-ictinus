import type { CSSObject } from '@emotion/react';
import React from 'react';
import isEqual from 'react-fast-compare';

import { trContainer } from './TR.style';

export type TRProps = {
  /** Style overrides */
  sx?: CSSObject;
};

const TR: React.FCC<TRProps> = ({ sx, children }) => {
  return <tr css={trContainer({ sx })}>{children}</tr>;
};

export default React.memo(TR, isEqual);
