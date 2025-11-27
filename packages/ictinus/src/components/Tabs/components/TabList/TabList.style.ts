import type { CSSObject } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

import type { Theme } from '~/theme';

export const containerStyles = (sx?: CSSObject) => (theme: Theme) => css`
  display: flex;
  [role='tab'] {
    position: relative;
    width: fit-content;
    ${theme.tokens.typography.get('normal.body01')};
    color: ${vars.color.text.default.primary};
  }

  [role='tab'][data-selected] {
    color: ${vars.color.text.default.active};
    ${theme.tokens.typography.get('normal.label01')};
  }

  [role='tab'][data-focus-visible]:after {
    content: '';
    position: absolute;

    border-radius: ${vars['border-radius']['1']};
    border: ${vars['border-width']['3']} solid ${vars.color['border-color'].interactive.focused};
  }

  &[data-orientation='horizontal'] {
    gap: ${vars.spacing['5']};

    [role='tab'][data-focus-visible]:after {
      inset: -3px -8px;
    }

    [role='tab'] {
      border-bottom: ${vars['border-width']['2']} solid
        ${vars.color['border-color'].decorative.transparent};
      transition: color ease-in-out 0.2s;
      transition: border-bottom 0.2s;
    }

    [role='tab']:hover {
      border-color: ${vars.color['border-color'].interactive.default};
    }

    [role='tab'][data-selected] {
      color: ${vars.color.text.default.active};
      ${theme.tokens.typography.get('normal.label01')};

      border-color: ${vars.color['border-color'].interactive.active};
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    gap: ${vars.spacing['4']};

    [role='tab'][data-focus-visible]:after {
      inset: -4px -2px;
    }

    [role='tab'] {
      padding: ${vars.spacing['5']} ${vars.spacing['4']};

      box-shadow: inset ${vars['border-width']['2']} 0 0 0
        ${vars.color['border-color'].decorative.transparent};

      transition: color ease-in-out 0.2s;
      transition: box-shadow 0.2s;
    }

    [role='tab']:hover {
      box-shadow: inset ${vars['border-width']['2']} 0 0 0
        ${vars.color['border-color'].interactive.default};
    }

    [role='tab'][data-selected] {
      box-shadow: inset ${vars['border-width']['2']} 0 0 0
        ${vars.color['border-color'].interactive.active};
    }
  }

  ${sx};
`;
