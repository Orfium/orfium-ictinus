import { rem } from 'polished';
import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';

export const visualContainer = () => (theme: Theme): SerializedStyles => css`
  margin: ${theme.spacing.md};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  margin-top: ${theme.spacing.sm};
  max-height: ${rem(180)};
  overflow: auto;
  max-width: fit-content;
`;
