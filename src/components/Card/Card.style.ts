import { css, SerializedStyles } from '@emotion/core';
import { Props } from './Card';
import { Theme } from '../../theme';
import { Elevation, Spacing } from 'index';

export const cardStyle = ({ elevated, transparent, radius }: Props) => (
  theme: Theme
): SerializedStyles => css`
  ${elevated && cardElevation(theme, elevated, transparent, radius)};
`;

export const cardElevation = (
  theme: Theme,
  elevated: keyof Elevation,
  transparent?: boolean | undefined,
  radius?: keyof Spacing | undefined
): SerializedStyles => css`
  box-shadow: ${theme.elevation[elevated]};
  background: ${transparent ? 'transparent' : theme.palette.white};
  border-radius: ${radius ? theme.spacing[radius] : 0};
`;
