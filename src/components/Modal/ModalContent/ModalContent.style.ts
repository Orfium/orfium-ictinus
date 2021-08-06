import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../../theme';

export const modalContentContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  color: ${theme.utils.getColor('lightTintedGrey', 700, 'flat')};
  font-weight: ${theme.typography.weights.regular};
`;

export const labelContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['14']};
  margin: 0 0 ${theme.spacing.xsm} 0;
`;

export const headingContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['28']};
  color: ${theme.palette.black};
  font-weight: ${theme.typography.weights.medium};
  margin: 0 0 ${theme.spacing.xl} 0;
`;

export const messageContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['16']};
  color: ${theme.utils.getColor('lightTintedGrey', 750)};
  max-height: ${rem(430)};
  overflow-y: hidden;
  margin: 0;
`;

export const actionsContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin: ${theme.spacing.xl} 0 0 0;

  button {
    margin-left: ${theme.spacing.md};
  }
`;
