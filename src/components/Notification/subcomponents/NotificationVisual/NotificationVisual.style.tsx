import { rem } from 'polished';
import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/core';

export const headingContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  margin-top: ${theme.spacing.sm};
  max-height: ${rem(194)};
  overflow: auto;
`;

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
