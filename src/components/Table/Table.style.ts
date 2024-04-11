import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const tableContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: inline-block;
      border: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-radius: 4px;
      background: ${theme.globals.colors.get('neutral.1')};
    `;
  };

export const tableStyles = (): SerializedStyles => {
  return css`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    thead > tr > th:last-child,
    tbody > tr > td:last-child {
      border-right: none;
    }

    tbody > tr:last-child > td {
      border-bottom: none;
    }
  `;
};
