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

    return css`
      display: ${placement === 'inline' ? 'inline-flex' : 'flex'};
      gap: ${tokens('padding')};
      color: ${tokens(`textColor.${type}.default` as LinkTokens)};
      text-decoration: none;
      position: relative;

      &:hover,
      &[aria-expanded='true'] {
        color: ${tokens(`textColor.${type}.hover` as LinkTokens)};
        path {
          fill: ${tokens(`textColor.${type}.hover` as LinkTokens)} !important;
        }
      }

      &:visited {
        color: ${tokens(`textColor.${type}.visited` as LinkTokens)};
        path {
          fill: ${tokens(`textColor.${type}.visited` as LinkTokens)} !important;
        }
      }

      &:focus-visible:after {
        content: '';
        position: absolute;
        inset: -3px -6px;
        border-radius: ${theme.globals.borderRadius.get('2')};
        border: ${tokens('borderWidth.2')} solid ${tokens('borderColor.focused')};
      }

      opacity: ${isDisabled ? theme.tokens.disabledState.get('default') : 1};

      width: fit-content;
      align-items: center;
      cursor: ${isDisabled ? 'default' : 'pointer'};
      pointer-events: ${isDisabled ? 'none' : 'default'};

      ${generateStylesFromTokens(tokens(`${placement}.${size}` as LinkTokens))}
    `;
  };
