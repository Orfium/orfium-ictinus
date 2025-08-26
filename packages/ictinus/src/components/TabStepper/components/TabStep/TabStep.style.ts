import { css, type CSSObject } from '@emotion/react';
import { type Theme } from '~/theme';
import { flex, flexCenterVertical } from '~/theme/functions';

export const stepStyles = (sx?: CSSObject) => css`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  ${sx};
`;

export const stepContainer = () => (theme: Theme) => css`
  ${flex};
  box-sizing: border-box;
  flex-direction: column;
  gap: ${theme.globals.spacing.get('3')};
`;

export const stepTitle = () => (theme: Theme) => css`
  ${flexCenterVertical};
  gap: ${theme.dimension.spacing.get('sm')};
`;

export const stepSubtitle = () => (theme: Theme) => css`
  ${theme.tokens.typography.get('normal.body03')}
  color: ${theme.tokens.colors.get('textColor.default.secondary')}
`;
