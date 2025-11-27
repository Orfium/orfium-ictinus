import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { LinkTokens } from './Link.tokens';
import { getLinkTokens } from './Link.tokens';
import type { LinkProps } from './Link.types';

export const linkContainer =
  ({
    placement,
    type,
    size,
    isDisabled,
  }: Pick<LinkProps, 'placement' | 'type' | 'size' | 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getLinkTokens(theme);

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

      ${generateStylesFromTokens(tokens(`${placement}.${size}` as LinkTokens))}
    `;
  };
