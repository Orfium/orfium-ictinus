import { css, SerializedStyles } from '@emotion/react';

import {
  AvatarTextTokens,
  AvatarTokens,
  getAvatarTextTokens,
  getAvatarTokens,
} from './Avatar.tokens';
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
      width: ${tokens(`size.${size}` as AvatarTokens)};
      height: ${tokens(`size.${size}` as AvatarTokens)};
      border-radius: ${tokens('borderRadius')};
      border: ${tokens('borderWidth')} solid;
      border-color: ${tokens(`borderColor.${color}` as AvatarTokens)};
      box-sizing: border-box;
      background-color: ${tokens(`backgroundColor.${color}` as AvatarTokens)};
      color: ${tokens(`textColor.${color}` as AvatarTokens)};
      overflow: hidden;
      position: relative;
      align-items: center;
      flex-shrink: 0;
      user-select: none;
      justify-content: center;

      ${generateStylesFromTokens(typographyTokens(`${size}` as AvatarTextTokens))};

      img {
        border-radius: ${tokens('borderRadius')};
        width: 100%;
        height: 100%;
      }
    `;
  };
