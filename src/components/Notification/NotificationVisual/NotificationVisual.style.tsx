import { rem } from 'polished';
import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  margin-top: ${theme.spacing.sm};
  max-height: ${rem(194)};
  overflow: auto;
`;
