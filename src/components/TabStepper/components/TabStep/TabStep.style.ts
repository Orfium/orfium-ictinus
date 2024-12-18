import { css } from '@emotion/react';

import type { Theme } from '~/theme';
import { flex, flexCenterVertical } from '~/theme/functions';

export const stepStyles = () =>
  css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

export const stepContainer = () => (theme: Theme) =>
  css`
    ${flex};
    flex-direction: column;
    gap: ${theme.globals.spacing.get('3')};
    padding: ${theme.globals.spacing.get('4')};
  `;

export const stepTitle = () => (theme: Theme) =>
  css`
    ${flexCenterVertical};
    justify-content: space-between;
    gap: ${theme.globals.spacing.get('7')};
  `;

export const stepSubtitle = () => (theme: Theme) =>
  css`
    ${theme.tokens.typography.get('normal.body03')}
    color: ${theme.tokens.colors.get('textColor.default.secondary')}
  `;
