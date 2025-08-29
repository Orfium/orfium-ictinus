import type { CSSObject } from '@emotion/react';
import React from 'react';

import type { TableProps } from 'components/Table/types';
import { tHeadContainer } from './THead.style';

export type THeadProps = Pick<TableProps<any>, 'hasStickyHeader'> & {
  /** Whether the tbody has a scrollbar. When true, a padding-right is added to the thead in order for the element to align with the tbody correctly  */
  hasScrollbar?: boolean;
  /** Style overrides */
  sx?: CSSObject;
};

const THead: React.FCC<THeadProps> = ({ hasStickyHeader, hasScrollbar, sx, children }) => {
  return <thead css={tHeadContainer({ hasStickyHeader, hasScrollbar, sx })}>{children}</thead>;
};

export default THead;
