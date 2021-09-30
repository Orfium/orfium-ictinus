import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';

export const visualContainer = () => (theme: Theme): SerializedStyles => css`
  margin: ${theme.spacing.md};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  margin-top: ${theme.spacing.sm};
  max-height: ${rem(180)};
  overflow: auto;
  max-width: fit-content;
`;
