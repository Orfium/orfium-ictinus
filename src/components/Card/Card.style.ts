import { css, SerializedStyles } from '@emotion/core';
import { Props } from './Card';
import { Theme } from '../../theme';
import { Elevation } from 'index';

export const cardStyle = ({ elevated }: Props) => (theme: Theme): SerializedStyles => css`
  ${elevated && cardElevation(theme, elevated)};
`;

export const cardElevation = (theme: Theme, elevated: keyof Elevation): SerializedStyles => css`
  box-shadow: ${theme.elevation[elevated]};
`;
