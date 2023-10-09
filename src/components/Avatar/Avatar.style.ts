import { css, SerializedStyles } from '@emotion/react';

import { getAvatarTextTokens, getAvatarTokens } from './Avatar.tokens';
import { AvatarColors, AvatarSizes } from './Avatar.types';
import { Theme } from '../../theme';
import { flex } from '../../theme/functions';
import { generateStylesFromTokens } from 'components/Typography/utils';

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
