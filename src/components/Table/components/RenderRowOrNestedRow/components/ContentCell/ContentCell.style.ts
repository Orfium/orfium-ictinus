import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const nestedHeaderStyle = () => (theme: Theme): SerializedStyles =>
  css({
    color: theme.utils.getColor('lightGrey', 750),
    fontSize: theme.typography.fontSizes['12'],
    paddingBottom: theme.spacing.xsm,
    fontWeight: theme.typography.weights.bold,
  });
