import { css, SerializedStyles } from '@emotion/react';
import rem from 'polished/lib/helpers/rem';
import { Theme } from 'theme';

import { getBorderColor } from 'components/Table/utils';

export const borderedRowStyle =
  ({ bordered, isCustomCell }: { bordered: boolean; isCustomCell?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css({
      borderBottom: bordered ? `${rem(1)} solid ${getBorderColor(theme)}` : 'none',
      'td:first-of-type': {
        paddingLeft: theme.spacing.md,
      },

      'td:last-child': {
        paddingRight: isCustomCell ? 'inherit' : theme.spacing.md,
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
