import type { CSSObject } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '~/theme';

export const containerStyles = (sx?: CSSObject) => (theme: Theme) =>
  css`
    display: flex;

    [role='tab'] {
      position: relative;
      width: fit-content;
      ${theme.tokens.typography.get('normal.body01')}
    }

    [role='tab'][data-selected] {
      ${theme.tokens.typography.get('normal.title01')}
    }

    [role='tab']:not([data-selected]):hover {
      background: ${theme.tokens.colors.get('backgroundColor.alt')};
      transition: background ease-in-out 0.2s;
    }

    [role='tab'][data-focus-visible]:after {
      content: '';
      position: absolute;

      border-radius: ${theme.dimension.borderRadius.get('sm')};
      border: ${theme.dimension.borderWidth.get('focused')} solid
        ${theme.tokens.colors.get('borderColor.interactive.focused')};
    }

    [role='tab'][data-status='warning'] {
      [data-role='title'] {
        color: ${theme.tokens.colors.get('textColor.default.error')};
      }
    }

    [role='tab'][data-selected]:not([data-status='warning']) {
      [data-role='title'] {
        color: ${theme.tokens.colors.get('textColor.default.active')};
      }
    }

    &[data-orientation='horizontal'] {
      gap: ${theme.globals.spacing.get('7')};
      border-bottom: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};

      [role='tab'] {
        padding: ${theme.globals.spacing.get('3')};
      }

      [role='tab']:after {
        inset: -8px -12px;
      }

      [role='tab'][data-selected] {
        border-bottom: ${theme.globals.borderWidth.get('2')} solid
          ${theme.tokens.colors.get('borderColor.interactive.active')};

        &[data-status='warning'] {
          border-color: ${theme.tokens.colors.get('borderColor.interactive.error')};
        }

        margin-bottom: -${theme.globals.borderWidth.get('2')};
      }
    }

    &[data-orientation='vertical'] {
      flex-direction: column;
      gap: ${theme.globals.spacing.get('6')};
      border-left: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};

      [role='tab'][data-focus-visible]:after {
        inset: -4px -2px;
      }

      [role='tab'] {
        padding: ${theme.globals.spacing.get('4')} ${theme.globals.spacing.get('5')};
      }

      [role='tab'][data-selected] {
        border-left: ${theme.globals.borderWidth.get('2')} solid
          ${theme.tokens.colors.get('borderColor.interactive.active')};

        &[data-status='warning'] {
          border-color: ${theme.tokens.colors.get('indicators.error')};
        }

        margin-left: -${theme.globals.borderWidth.get('2')};
      }
    }

    ${sx};
  `;
