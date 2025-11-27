import { css, type CSSObject } from '@emotion/react';
import { vars } from '@orfium/tokens';
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
    background-color: ${vars.color.background.alt};
    transition: background-color ease-out 150ms;
  }

  [role='tab'][data-focus-visible]::after {
    content: '';
    position: absolute;
    border-radius: ${vars['border-radius']['1']};
    border: ${vars['border-width']['3']} solid ${vars.color['border-color'].interactive.focused};
  }

  [role='tab'][data-status='warning'] {
    [data-role='title'] {
      color: ${vars.color.text.default.error};
    }
  }

  [role='tab'][data-selected]:not([data-status='warning']) {
    [data-role='title'] {
      color: ${vars.color.text.default.active};
    }
  }

  &[data-orientation='horizontal'] {
    gap: ${vars.spacing['7']};

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${vars['border-width']['2']};
      background-color: ${vars.color['border-color'].decorative.default};
    }

    [role='tab'] {
      border-bottom: ${vars['border-width']['2']} solid transparent;
      padding: ${vars.spacing['5']} ${vars.spacing['4']}
        calc(${vars.spacing['5']} - ${vars['border-width']['2']});
    }

    [role='tab']:not([data-selected]):hover {
      border-bottom: ${vars['border-width']['2']} solid
        ${vars.color['border-color'].decorative.default};
    }

    [role='tab'][data-focus-visible]::after {
      inset: -${vars['border-width']['2']};
    }

    [role='tab'][data-selected] {
      border-bottom: ${vars['border-width']['2']} solid
        ${vars.color['border-color'].interactive.active};

      &[data-status='warning'] {
        border-color: ${vars.color['border-color'].interactive.error};
      }
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    gap: ${vars.spacing['6']};

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: ${vars['border-width']['2']};
      background-color: ${vars.color['border-color'].decorative.default};
    }

    [role='tab'][data-focus-visible]::after {
      inset: -${vars['border-width']['2']};
    }

    [role='tab']:not([data-selected]):hover {
      border-left: ${vars['border-width']['2']} solid
        ${vars.color['border-color'].decorative.default};
    }

    [role='tab'] {
      border-left: ${vars['border-width']['2']} solid transparent;
      padding: ${vars.spacing['5']} ${vars.spacing['5']} ${vars.spacing['5']}
        calc(${vars.spacing['5']} - ${vars['border-width']['2']});
    }

    [role='tab'][data-selected] {
      border-left: ${vars['border-width']['2']} solid
        ${vars.color['border-color'].interactive.active};

      &[data-status='warning'] {
        border-color: ${vars.color.indicators.error};
      }
    }
  }

  ${sx};
`;
