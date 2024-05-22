import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { AvatarTokens } from './Avatar.tokens';
import { getAvatarTokens, parseAvatarIconSize } from './Avatar.tokens';
import type { AvatarColors, AvatarProps, AvatarSizes } from './Avatar.types';
import { avatarColorToSemColor } from './constants';
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
        fill: ${theme.tokens.colors.get(avatarColorToSemColor[color].text)};
      }
    `;
  };

export const avatarStyle =
  ({ size, color }: { size: AvatarSizes; color: AvatarColors }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getAvatarTokens(theme);

    return css`
      ${flex};
      width: ${tokens(`size.${size}` as const)};
      height: ${tokens(`size.${size}` as const)};
      border-radius: ${theme.dimension.borderRadius.get('circle')};
      border: ${theme.dimension.borderWidth.get('default')} solid;
      border-color: ${theme.tokens.colors.get(avatarColorToSemColor[color].border)};
      box-sizing: border-box;
      background-color: ${theme.tokens.colors.get(avatarColorToSemColor[color].fill)};
      color: ${theme.tokens.colors.get(avatarColorToSemColor[color].text)};
      overflow: hidden;
      position: relative;
      align-items: center;
      flex-shrink: 0;
      user-select: none;
      justify-content: center;

      ${generateStylesFromTokens(tokens(`label.${size}` as const))};

      img {
        border-radius: ${theme.dimension.borderRadius.get('circle')};
        width: 100%;
        height: 100%;
      }
    `;
  };
