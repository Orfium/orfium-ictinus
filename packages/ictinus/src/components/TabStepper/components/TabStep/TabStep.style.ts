import { css, type CSSObject } from '@emotion/react';
import { vars } from '@orfium/tokens';
import { flex, flexCenterVertical } from 'theme/functions';
import { type Theme } from '~/theme';

export const stepStyles = (sx?: CSSObject) => css`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  ${sx};
`;

export const stepContainer = () => css`
  ${flex};
  box-sizing: border-box;
  flex-direction: column;
  gap: ${vars.spacing['3']};
`;

export const stepTitle = () => css`
  ${flexCenterVertical};
  gap: ${vars.spacing['4']};
`;

export const stepSubtitle = () => (theme: Theme) => css`
  ${theme.tokens.typography.get('normal.body03')}
  color: ${vars.color.text.default.secondary}
`;
