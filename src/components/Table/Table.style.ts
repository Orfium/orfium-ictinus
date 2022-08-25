import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getBorderColor } from './utils';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

export const tableCTAStyle =
  (isFixed: boolean) =>
  (theme: Theme): SerializedStyles =>
    css({
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      position: isFixed ? 'sticky' : undefined,
      top: isFixed ? 0 : undefined,
      background: isFixed ? theme.palette.white : undefined,
      zIndex: isFixed ? 3 : undefined,
    });

export const tableRowHeadersStyle =
  (hasExpandableRows: boolean, hasOnCheck: boolean, hasFixedHeader: boolean) =>
  (theme: Theme): SerializedStyles =>
    css({
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      borderBottomWidth: rem(hasExpandableRows || hasFixedHeader ? 0 : 1),
      borderBottomStyle: 'solid',
      borderBottomColor: getBorderColor(theme),

      'th:first-of-type': {
        paddingLeft: hasOnCheck ? undefined : theme.spacing.md,
      },

      'th:last-child': {
        paddingRight: hasExpandableRows ? undefined : theme.spacing.md,
      },
    });
