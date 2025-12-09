import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';

import { vars } from '@orfium/tokens';
import { getBorderColor } from 'components/TableV4/utils';

export const borderedRowStyle = ({
  isBordered,
  isCustomCell,
}: {
  isBordered: boolean;
  isCustomCell?: boolean;
}): SerializedStyles =>
  css({
    borderBottom: isBordered ? `${rem(1)} solid ${getBorderColor()}` : 'none',
    'td:first-of-type': {
      paddingLeft: vars.spacing['6'],
    },

    'td:last-child': {
      paddingRight: isCustomCell ? 'inherit' : vars.spacing['6'],
    },
  });

export const expandableRowStyle = ({
  isFirstRow,
  hasFixedHeader,
}: {
  isFirstRow: boolean;
  hasFixedHeader: boolean;
}): SerializedStyles =>
  css({
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    borderTop:
      //Adds border to the first row only if it doesn't have a fixed header
      isFirstRow && !hasFixedHeader ? `${rem(1)} solid ${getBorderColor()}` : 'none',
    borderBottom: `${rem(1)} solid ${getBorderColor()}`,
  });
