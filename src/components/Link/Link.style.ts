import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import type { LinkTokens } from './Link.tokens';
import { getLinkTokens } from './Link.tokens';
import type { LinkProps } from './Link.types';
import { generateStylesFromTokens } from 'components/Typography/utils';

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
      gap: ${theme.dimension.spacing.get('xs')};
      color: ${theme.tokens.colors.get(
        isInverted ? 'textColor.inverted.active' : 'textColor.default.active'
      )};
      text-decoration: none;
      position: relative;

      &:hover,
      &[aria-expanded='true'] {
        color: ${theme.tokens.colors.get(
          isInverted ? 'textColor.inverted.primary' : 'textColor.default.primary'
        )};
        path {
          fill: ${theme.tokens.colors.get(
            isInverted ? 'textColor.inverted.primary' : 'textColor.default.primary'
          )} !important;
        }
      }

      &:visited {
        color: ${theme.tokens.colors.get(
          isInverted ? 'textColor.inverted.visited' : 'textColor.default.visited'
        )};
        path {
          fill: ${theme.tokens.colors.get(
            isInverted ? 'textColor.inverted.visited' : 'textColor.default.visited'
          )} !important;
        }
      }

      &:focus-visible:after {
        content: '';
        position: absolute;
        inset: -3px -6px;
        border-radius: ${theme.globals.borderRadius.get('2')};
        border: ${theme.dimension.borderWidth.get('focused')} solid
          ${theme.tokens.colors.get('borderColor.interactive.upsell')};
      }

      opacity: ${isDisabled ? theme.tokens.disabledState.get('default') : 1};

      width: fit-content;
      align-items: center;
      cursor: ${isDisabled ? 'default' : 'pointer'};
      pointer-events: ${isDisabled ? 'none' : 'default'};

      ${generateStylesFromTokens(tokens(`${placement}.${size}` as LinkTokens))}
    `;
  };
