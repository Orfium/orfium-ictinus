import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { LinkProps } from './Link.types';

const LINK_TOKENS = (theme: Theme) => {
  return {
    block: {
      1: generateStylesFromTokens(theme.tokens.typography.get('normal.label01')),
      2: generateStylesFromTokens(theme.tokens.typography.get('normal.label02')),
      3: generateStylesFromTokens(theme.tokens.typography.get('normal.label03')),
    },
    inline: {
      1: {
        fontFamily: vars.font.sans,
        textDecoration: theme.globals.typography.textDecoration.get('link'),
        fontWeight: vars.weight.medium,
        fontSize: vars['font-size']['4'],
        lineHeight: vars['line-height']['5'],
        letterSpacing: vars['letter-spacing']['1'],
      },
      2: {
        fontFamily: vars.font.sans,
        textDecoration: theme.globals.typography.textDecoration.get('link'),
        fontWeight: vars.weight.medium,
        fontSize: vars['font-size']['3'],
        lineHeight: vars['line-height']['4'],
        letterSpacing: vars['letter-spacing']['2'],
      },
      3: {
        fontFamily: vars.font.sans,
        textDecoration: theme.globals.typography.textDecoration.get('link'),
        fontWeight: vars.weight.medium,
        fontSize: vars['font-size']['2'],
        lineHeight: vars['line-height']['3'],
        letterSpacing: vars['letter-spacing']['2'],
      },
    },
  };
};

export const linkContainer =
  ({
    placement,
    type,
    size,
    isDisabled,
  }: Pick<LinkProps, 'placement' | 'type' | 'size' | 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    const isInverted = type === 'inverted';

    return css`
      display: ${placement === 'inline' ? 'inline-flex' : 'flex'};
      gap: ${vars.spacing['3']};
      color: ${vars.color.text[isInverted ? 'inverted' : 'default'].active};
      text-decoration: none;
      position: relative;

      &:hover,
      &[aria-expanded='true'] {
        color: ${vars.color.text[isInverted ? 'inverted' : 'default'].primary};
        path {
          fill: ${vars.color.text[isInverted ? 'inverted' : 'default'].primary} !important;
        }
      }

      &:visited {
        color: ${vars.color.text[isInverted ? 'inverted' : 'default'].visited};
        path {
          fill: ${vars.color.text[isInverted ? 'inverted' : 'default'].visited} !important;
        }
      }

      &:focus-visible:after {
        content: '';
        position: absolute;
        inset: -3px -6px;
        border-radius: ${vars['border-radius']['2']};
        border: ${vars['border-width']['3']} solid ${vars.color['border-color'].interactive.upsell};
      }

      opacity: ${isDisabled ? theme.tokens.disabledState.get('default') : 1};

      align-items: center;
      cursor: ${isDisabled ? 'default' : 'pointer'};
      pointer-events: ${isDisabled ? 'none' : 'auto'};

      ${LINK_TOKENS(theme)[placement][size]};
    `;
  };
