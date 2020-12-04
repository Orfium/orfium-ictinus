import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/core';

export const headingContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  padding-top: ${theme.spacing.sm};
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: ${theme.spacing.md};
`;

export const actionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;
