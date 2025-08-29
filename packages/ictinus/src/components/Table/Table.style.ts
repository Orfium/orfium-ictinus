import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const tableContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: inline-block;
      border: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-radius: ${theme.dimension.borderRadius.get('md')};
      background: ${theme.tokens.colors.get('backgroundColor.default')};
    `;
  };

export const tableStyles = ({ sx }: { sx?: CSSObject }): SerializedStyles => {
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

    ${sx};
  `;
};
