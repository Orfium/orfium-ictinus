import { css, SerializedStyles } from '@emotion/react';
import rem from 'polished/lib/helpers/rem';
import { Theme } from 'theme';

export const borderedRowStyle = ({ bordered }: { bordered: boolean }) => (
  theme: Theme
): SerializedStyles =>
  css({
    borderBottom: bordered ? `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}` : 'none',
    'td:first-child': {
      paddingLeft: theme.spacing.md,
    },

    'td:last-child': {
      paddingRight: theme.spacing.md,
    },
  });

export const expandableRowStyle = ({ isFirstRow }: { isFirstRow: boolean }) => (
  theme: Theme
): SerializedStyles =>
  css({
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    borderTop:
      //Adds border to the first row only.
      isFirstRow ? `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}` : 'none',
    borderBottom: `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}`,
  });
