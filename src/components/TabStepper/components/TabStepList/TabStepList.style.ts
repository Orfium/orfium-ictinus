import { css, type CSSObject } from '@emotion/react';
import { type Theme } from '~/theme';

export const containerStyles = (sx?: CSSObject) => (theme: Theme) => css`
  display: flex;
  position: relative;
  isolation: isolate;

  [role='tab'] {
    box-sizing: border-box;
    position: relative;
    ${theme.tokens.typography.get('normal.body01')}
  }

  [role='tab'][data-disabled] {
    cursor: default;
  }

  [role='tab'][data-selected] {
    ${theme.tokens.typography.get('normal.title01')}
  }

  [role='tab']:not([data-selected], [data-disabled]):hover {
    background-color: ${theme.tokens.colors.get('backgroundColor.alt')};
    transition: background-color ease-out 150ms;
  }

  [role='tab'][data-focus-visible]::after {
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

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${theme.globals.borderWidth.get('2')};
      background-color: ${theme.tokens.colors.get('borderColor.decorative.default')};
    }

    [role='tab'] {
      border-bottom: ${theme.globals.borderWidth.get('2')} solid transparent;
      padding: ${theme.dimension.spacing.get('md')} ${theme.dimension.spacing.get('sm')}
        calc(${theme.dimension.spacing.get('md')} - ${theme.globals.borderWidth.get('2')});
    }

    [role='tab']:not([data-selected]):hover {
      border-bottom: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
    }

    [role='tab'][data-focus-visible]::after {
      inset: -${theme.globals.borderWidth.get('2')};
    }

    [role='tab'][data-selected] {
      border-bottom: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.interactive.active')};

      &[data-status='warning'] {
        border-color: ${theme.tokens.colors.get('borderColor.interactive.error')};
      }
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    gap: ${theme.globals.spacing.get('6')};

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: ${theme.globals.borderWidth.get('2')};
      background-color: ${theme.tokens.colors.get('borderColor.decorative.default')};
    }

    [role='tab'][data-focus-visible]::after {
      inset: -${theme.globals.borderWidth.get('2')};
    }

    [role='tab']:not([data-selected]):hover {
      border-left: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
    }

    [role='tab'] {
      border-left: ${theme.globals.borderWidth.get('2')} solid transparent;
      padding: ${theme.dimension.spacing.get('md')} ${theme.dimension.spacing.get('md')}
        ${theme.dimension.spacing.get('md')}
        calc(${theme.dimension.spacing.get('md')} - ${theme.globals.borderWidth.get('2')});
    }

    [role='tab'][data-selected] {
      border-left: ${theme.globals.borderWidth.get('2')} solid
        ${theme.tokens.colors.get('borderColor.interactive.active')};

      &[data-status='warning'] {
        border-color: ${theme.tokens.colors.get('indicators.error')};
      }
    }
  }

  ${sx};
`;
