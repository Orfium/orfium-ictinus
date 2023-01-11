import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';
import { flex } from '../../theme/functions';
import tokens from './Avatar.tokens';
import { AvatarColors, AvatarSizes } from './Avatar.types';

export const avatarStyle =
  ({ size, color }: { size: AvatarSizes; color: AvatarColors }) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      width: ${tokens.size[size]};
      height: ${tokens.size[size]};
      border-radius: ${theme.globals.borderRadius.get('7')};
      border: ${theme.globals.borderWidth.get('1')} solid;
      border-color: ${theme.tokens.palette.get('accents.lightPurple.main')};
      box-sizing: border-box;
      background-color: ${tokens.color.getBackgroundColor(color)};
      color: ${tokens.color.getForegroundColor(color)};
      overflow: hidden;
      position: relative;
      font-size: ${tokens.fontSize[size]};
      font-weight: ${theme.globals.typography.weights.get('medium')};
      align-items: center;
      flex-shrink: 0;
      user-select: none;
      justify-content: center;

      img {
        border-radius: ${theme.globals.borderRadius.get('7')};
        width: 100%;
        height: 100%;
      }
    `;
