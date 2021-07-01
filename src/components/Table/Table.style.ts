import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { rem } from 'polished';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

export const tableRowHeadersStyle = () => (theme: Theme): SerializedStyles =>
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
      paddingRight: theme.spacing.md,
    },
  });
