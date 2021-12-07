import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

export const tableCTAStyle = (fixed: boolean) => (theme: Theme): SerializedStyles =>
  css({
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    position: fixed ? 'sticky' : undefined,
    top: fixed ? 0 : undefined,
    background: fixed ? theme.palette.white : undefined,
    zIndex: fixed ? 3 : undefined,
  });

export const tableRowHeadersStyle = (hasExpandableRows: boolean, hasOnCheck: boolean) => (
  theme: Theme
): SerializedStyles =>
  css({
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: rem(hasExpandableRows ? 0 : 1),
    borderBottomStyle: 'solid',
    borderBottomColor: theme.utils.getColor('lightGrey', 100),

    'th:first-of-type': {
      paddingLeft: hasOnCheck ? undefined : theme.spacing.md,
    },

    'th:last-child': {
      paddingRight: hasExpandableRows ? undefined : theme.spacing.md,
    },
  });