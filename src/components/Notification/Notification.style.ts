import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';

// Generic SerializedStyles for all Notification Types

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${theme.spacing.md};
  position: sticky;
  bottom: ${theme.spacing.md};
  top: 100%;
`;

export const actionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;

export const iconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const closeActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.lg};
`;

export const boldMessageContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;
