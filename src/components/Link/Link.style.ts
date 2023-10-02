import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { getLinkTokens, LinkTokens } from './Link.tokens';
import { LinkProps } from './Link.types';
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

      border-width: ${tokens('borderWidth.1')};

      &:hover {
        color: ${tokens(`textColor.${type}.hover` as LinkTokens)};
        path {
          fill: ${tokens(`textColor.${type}.hover` as LinkTokens)};
        }
      }

      &:visited {
        color: ${tokens(`textColor.${type}.visited` as LinkTokens)};
        path {
          fill: ${tokens(`textColor.${type}.visited` as LinkTokens)};
        }
      }

      &:focus-visible {
        border-width: ${tokens('borderWidth.2')};
      }

      opacity: ${isDisabled ? theme.tokens.disabledState.get('default') : 1};

      width: fit-content;
      align-items: center;
      cursor: ${isDisabled ? 'default' : 'pointer'};
      pointer-events: ${isDisabled ? 'none' : 'default'};

      ${generateStylesFromTokens(tokens(`${placement}.${size}` as LinkTokens))}
    `;
  };
