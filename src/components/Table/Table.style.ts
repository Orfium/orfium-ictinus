import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

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
