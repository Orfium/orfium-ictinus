import type { CSSObject } from '@emotion/react';
import React from 'react';

import type { TableProps } from 'components/Table/types';
import { tBodyContainer } from './TBody.style';

export type TBodyProps = Pick<TableProps<any>, 'hasStickyHeader'> & {
  children?: React.ReactNode;
  /** Style overrides */
  sx?: CSSObject;
};

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ hasStickyHeader, sx, children }, ref) => {
    return (
      <tbody ref={ref} css={tBodyContainer({ hasStickyHeader, sx })}>
        {children}
      </tbody>
    );
  }
);

TBody.displayName = 'TBody';

export default TBody;
