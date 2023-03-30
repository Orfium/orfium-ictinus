import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const nestedHeaderStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css({
      color: theme.utils.getColor('lightGrey', 750),
      fontSize: theme.globals.typography.fontSize.get('2'),
      paddingBottom: theme.globals.spacing.get('3'),
      fontWeight: theme.globals.typography.fontWeight.get('bold'),
    });
