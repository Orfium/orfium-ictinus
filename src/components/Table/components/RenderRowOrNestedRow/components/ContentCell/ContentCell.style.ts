import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';

export const nestedHeaderStyle = () => (theme: Theme): SerializedStyles =>
  css({
    color: theme.utils.getColor('lightGray', 600),
    fontSize: theme.typography.fontSizes['12'],
    fontWeight: theme.typography.weights.bold,
  });
