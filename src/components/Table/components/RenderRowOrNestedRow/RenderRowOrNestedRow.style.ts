import { css, SerializedStyles } from '@emotion/react';
import rem from 'polished/lib/helpers/rem';
import { Theme } from 'theme';

export const borderedRowStyle = ({
  bordered,
  isCustomCell,
}: {
  bordered: boolean;
  isCustomCell?: boolean;
}) => (theme: Theme): SerializedStyles =>
  css({
    borderBottom: bordered ? `${rem(1)} solid ${theme.utils.getColor('lightGrey', 100)}` : 'none',
    'td:first-of-type': {
      paddingLeft: theme.spacing.md,
    },

    'td:last-child': {
      paddingRight: isCustomCell ? 'inherit' : theme.spacing.md,
    },
  });

export const expandableRowStyle = ({
  isFirstRow,
  fixedHeader,
}: {
  isFirstRow: boolean;
  fixedHeader: boolean;
}) => (theme: Theme): SerializedStyles =>
  css({
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    borderTop:
      //Adds border to the first row only if it doesn't have a fixed header
      isFirstRow && !fixedHeader
        ? `${rem(1)} solid ${theme.utils.getColor('lightGrey', 250)}`
        : 'none',
    borderBottom: `${rem(1)} solid ${theme.utils.getColor('lightGrey', 100)}`,
  });