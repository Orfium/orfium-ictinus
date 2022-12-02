import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const nestedHeaderStyle = () => (theme: Theme): SerializedStyles =>
  css({
    color: theme.utils.getColor('lightGrey', 750),
    fontSize: theme.typography.fontSizes.get('2'),
    paddingBottom: theme.spacing.get('3'),
    fontWeight: theme.typography.weights.get('bold'),
  });
