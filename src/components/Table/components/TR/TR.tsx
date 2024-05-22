import type { CSSObject } from '@emotion/react';
import React from 'react';
import isEqual from 'react-fast-compare';
import type { DivProps } from 'utils/common';

import { trContainer } from './TR.style';

export type TRProps = {
  /** Whether the row is expandable */
  isExpandable?: boolean;
  /** Whether the row is expanded */
  isExpanded?: boolean;
  /** Whether the row is selected */
  isSelected?: boolean;
  /** Whether the row is selectable */
  isSelectable?: boolean;
  /** Style overrides */
  sx?: CSSObject;
};

const TR: React.FCC<TRProps & Pick<DivProps, 'onClick'>> = ({
  onClick,
  isExpandable,
  isExpanded,
  isSelected,
  isSelectable,
  sx,
  children,
}) => {
  return (
    <tr
      onClick={onClick}
      css={trContainer({ isSelected, isSelectable, isExpandable, isExpanded, sx })}
    >
      {children}
    </tr>
  );
};

export default React.memo(TR, isEqual);
