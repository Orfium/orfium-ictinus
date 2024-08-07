import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

import { getBorderColor } from 'components/TableV4/utils';

export const borderedRowStyle =
  ({ isBordered, isCustomCell }: { isBordered: boolean; isCustomCell?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css({
      borderBottom: isBordered ? `${rem(1)} solid ${getBorderColor(theme)}` : 'none',
      'td:first-of-type': {
        paddingLeft: theme.globals.spacing.get('6'),
      },

      'td:last-child': {
        paddingRight: isCustomCell ? 'inherit' : theme.globals.spacing.get('6'),
      },
    });

export const expandableRowStyle =
  ({ isFirstRow, hasFixedHeader }: { isFirstRow: boolean; hasFixedHeader: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css({
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      borderTop:
        //Adds border to the first row only if it doesn't have a fixed header
        isFirstRow && !hasFixedHeader ? `${rem(1)} solid ${getBorderColor(theme)}` : 'none',
      borderBottom: `${rem(1)} solid ${getBorderColor(theme)}`,
    });
