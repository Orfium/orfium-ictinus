import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type {} from 'index';

import type { CardProps } from './Card';
import type { Theme } from '../../theme';

export const cardStyle =
  ({ elevation, isTransparent, radius }: CardProps) =>
  (theme: Theme): SerializedStyles =>
    css`
      box-shadow: ${elevation ? theme.globals.boxShadow.get(elevation) : undefined};
      background: ${isTransparent
        ? theme.tokens.colors.get('backgroundColor.transparent')
        : theme.tokens.colors.get('backgroundColor.default')};
      border-radius: ${radius ? theme.globals.spacing.get(radius) : 0};
    `;
