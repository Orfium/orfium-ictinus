import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { AvatarTokens } from './Avatar.tokens';
import { getAvatarTextTokens, getAvatarTokens, parseAvatarIconSize } from './Avatar.tokens';
import type { AvatarColors, AvatarProps, AvatarSizes } from './Avatar.types';
import type { Theme } from '../../theme';
import { flex } from '../../theme/functions';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const iconStyles =
  ({ size = 1, color = 'blue' }: Pick<AvatarProps, 'size' | 'color'>) =>
  (theme: Theme) => {
    const tokens = getAvatarTokens(theme);

    return css`
      width: ${rem(parseFloat(tokens(`size.${size}` as AvatarTokens, parseAvatarIconSize)))};
      height: ${rem(parseFloat(tokens(`size.${size}` as AvatarTokens, parseAvatarIconSize)))};
      path {
        fill: ${tokens(`textColor.${color}` as AvatarTokens)};
      }
    `;
  };

export const avatarStyle =
  ({ size, color }: { size: AvatarSizes; color: AvatarColors }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getAvatarTokens(theme);
    const typographyTokens = getAvatarTextTokens(theme);

    return css`
      ${flex};
      width: ${tokens(`size.${size}` as const)};
      height: ${tokens(`size.${size}` as const)};
      border-radius: ${tokens('borderRadius')};
      border: ${tokens('borderWidth')} solid;
      border-color: ${tokens(`borderColor.${color}` as const)};
      box-sizing: border-box;
      background-color: ${tokens(`backgroundColor.${color}` as const)};
      color: ${tokens(`textColor.${color}` as const)};
      overflow: hidden;
      position: relative;
      align-items: center;
      flex-shrink: 0;
      user-select: none;
      justify-content: center;

      ${generateStylesFromTokens(typographyTokens(`${size}` as const))};

      img {
        border-radius: ${tokens('borderRadius')};
        width: 100%;
        height: 100%;
      }
    `;
  };
