import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

export const tableRowHeadersStyle = (hasExpandableRows: boolean) => (
  theme: Theme
): SerializedStyles =>
  css({
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: rem(1),
    borderBottomStyle: 'solid',
    borderBottomColor: theme.utils.getColor('lightGray', 200),

    'th:first-child': {
      paddingLeft: theme.spacing.md,
    },

    'th:last-child': {
      paddingRight: hasExpandableRows ? 'inherit' : theme.spacing.md,
    },
  });
