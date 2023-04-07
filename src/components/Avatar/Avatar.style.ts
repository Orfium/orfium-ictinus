import { css, SerializedStyles } from '@emotion/react';
import { get } from 'lodash';

import {
  AvatarTextTokens,
  AvatarTokens,
  getAvatarTextTokens,
  getAvatarTokens,
} from './Avatar.tokens';
import { AvatarColors, AvatarSizes } from './Avatar.types';
import { Theme } from '../../theme';
import { flex } from '../../theme/functions';

export const avatarStyle =
  ({ size, color }: { size: AvatarSizes; color: AvatarColors }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getAvatarTokens(theme);
    const typographyTokens = getAvatarTextTokens();

    return css`
      ${flex};
      width: ${tokens(`size.${size}` as AvatarTokens)};
      height: ${tokens(`size.${size}` as AvatarTokens)};
      border-radius: ${tokens('borderRadius')};
      border: ${tokens('borderWidth')} solid;
      border-color: ${tokens('color.borderColor')};
      box-sizing: border-box;
      background-color: ${tokens(`color.${color}.backgroundColor` as AvatarTokens)};
      color: ${tokens(`color.${color}.foregroundColor` as AvatarTokens)};
      overflow: hidden;
      position: relative;
      align-items: center;
      flex-shrink: 0;
      user-select: none;
      justify-content: center;

      font-size: ${get(typographyTokens(`${size}` as AvatarTextTokens), 'fontSize')};
      font-weight: ${get(typographyTokens(`${size}` as AvatarTextTokens), 'fontWeight')};
      line-height: ${get(typographyTokens(`${size}` as AvatarTextTokens), 'lineHeight')};
      letter-spacing: ${get(typographyTokens(`${size}` as AvatarTextTokens), 'letterSpacing')};

      img {
        border-radius: ${tokens('color.borderColor')};
        width: 100%;
        height: 100%;
      }
    `;
  };
