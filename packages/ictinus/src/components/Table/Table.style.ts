import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const tableContainer = (): SerializedStyles => {
  return css`
    display: inline-block;
    border: ${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default};
    border-radius: ${vars['border-radius']['2']};
    background: ${vars.color.background.default};
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
