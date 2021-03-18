import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

export const modalContentContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  padding-top: ${theme.spacing.sm};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  color: ${theme.utils.getColor('lightGray', 700, 'flat')};
  font-weight: ${theme.typography.weights.regular};
`;

export const labelContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['14']};
  margin: 0 0 ${theme.spacing.xsm} 0;
`;

export const headingContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['28']};
  color: ${theme.utils.getColor('lightGray', 600, 'flat')};
  font-weight: ${theme.typography.weights.light};
  margin: 0 0 ${theme.spacing.md} 0;
`;

export const messageContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['16']};
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
