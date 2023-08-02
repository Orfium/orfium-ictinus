import { css, SerializedStyles } from '@emotion/react';
import { Elevation } from 'index';
import { SpacingKey } from 'theme/globals/spacing';

import { CardProps } from './Card';
import { Theme } from '../../theme';

export const cardStyle =
  ({ elevated, isTransparent, radius }: CardProps) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${elevated && cardElevation(theme, elevated, isTransparent, radius)};
    `;

export const cardElevation = (
  theme: Theme,
  elevated: keyof Elevation,
  isTransparent?: boolean | undefined,
  radius?: SpacingKey | undefined
): SerializedStyles => css`
  box-shadow: ${theme.globals.elevation[elevated]};
  background: ${isTransparent ? 'transparent' : theme.globals.oldColors.white};
  border-radius: ${radius ? theme.globals.spacing.get(radius) : 0};
`;
