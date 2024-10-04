import type { CSSObject } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '~/theme';

export const containerStyles = (sx?: CSSObject) => (theme: Theme) =>
  css`
    display: flex;
    & > div {
      position: relative;
      width: fit-content;
      ${theme.tokens.typography.get('normal.body02')};
    }

    & > div[data-selected] {
      color: ${theme.tokens.colors.get('textColor.default.active')};
      ${theme.tokens.typography.get('normal.label02')};
    }

    & > div[data-focus-visible]:after {
      content: '';
      position: absolute;

      border-radius: ${theme.globals.borderRadius.get('2')};
      border: ${theme.dimension.borderWidth.get('focused')} solid
        ${theme.tokens.colors.get('borderColor.interactive.upsell')};
    }

    &[data-orientation='horizontal'] {
      gap: ${theme.globals.spacing.get('7')};

      > div[data-focus-visible]:after {
        inset: -8px -12px;
      }

      & > div {
        padding-bottom: ${theme.globals.spacing.get('4')};

        border-bottom: ${theme.globals.borderWidth.get('2')} solid
          ${theme.tokens.colors.get('borderColor.decorative.transparent')};
        transition: color ease-in-out 0.2s;
        transition: border-bottom 0.2s;
      }

      & > div:hover {
        border-color: ${theme.tokens.colors.get('borderColor.interactive.default')};
      }

      & > div[data-selected] {
        color: ${theme.tokens.colors.get('textColor.default.active')};
        ${theme.tokens.typography.get('normal.label02')};

        border-color: ${theme.tokens.colors.get('borderColor.interactive.active')};
      }
    }

    &[data-orientation='vertical'] {
      flex-direction: column;
      gap: ${theme.globals.spacing.get('4')};

      > div[data-focus-visible]:after {
        inset: -4px -2px;
      }

      & > div {
        padding: ${theme.globals.spacing.get('4')} ${theme.globals.spacing.get('5')};

        box-shadow: inset ${theme.globals.borderWidth.get('2')} 0 0 0
          ${theme.tokens.colors.get('borderColor.decorative.transparent')};

        transition: color ease-in-out 0.2s;
        transition: box-shadow 0.2s;
      }

      & > div[data-selected] {
        box-shadow: inset ${theme.globals.borderWidth.get('2')} 0 0 0
          ${theme.tokens.colors.get('borderColor.interactive.active')};
      }
    }

    ${sx};
  `;
