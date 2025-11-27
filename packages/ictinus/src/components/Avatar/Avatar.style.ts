import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

import { flex } from 'theme/functions';
import type { AvatarColors, AvatarProps, AvatarSizes } from './Avatar.types';

export const AVATAR_COLOR: Record<AvatarColors, Record<string, string>> = {
  blue: {
    border: vars.color.palette['primary-alt'].contrast,
    fill: vars.color.palette['primary-alt'].base,
    text: vars.color.text.default.active,
  },
  red: {
    border: vars.color.palette.error.contrast,
    fill: vars.color.palette.error.base,
    text: vars.color.text.default.error,
  },
  purple: {
    border: vars.color.palette.upsell.contrast,
    fill: vars.color.palette.upsell.base,
    text: vars.color.text.default.visited,
  },
  teal: {
    border: vars.color.palette.success.contrast,
    fill: vars.color.palette.success.base,
    text: vars.color.text.default.success,
  },
  orange: {
    border: vars.color.palette.warning.contrast,
    fill: vars.color.palette.warning.base,
    text: vars.color.text.default.warning,
  },
};

export const AVATAR_SIZE: Record<AvatarSizes, string> = {
  '1': vars.sizing['5'],
  '2': vars.sizing['6'],
  '3': vars.sizing['8'],
  '4': vars.sizing['12'],
  '5': vars.sizing['15'],
  '6': vars.sizing['18'],
};

export const AVATAR_TYPOGRAPHY: Record<AvatarSizes, Record<string, string>> = {
  '1': {
    fontSize: vars['font-size']['1'],
    lineHeight: vars['line-height']['1'],
    letterSpacing: vars['letter-spacing']['1'],
  },
  '2': {
    fontSize: vars['font-size']['2'],
    lineHeight: vars['line-height']['3'],
    letterSpacing: vars['letter-spacing']['2'],
  },
  '3': {
    fontSize: vars['font-size']['3'],
    lineHeight: vars['line-height']['4'],
    letterSpacing: vars['letter-spacing']['2'],
  },
  '4': {
    fontSize: vars['font-size']['4'],
    lineHeight: vars['line-height']['5'],
    letterSpacing: vars['letter-spacing']['1'],
  },
  '5': {
    fontSize: vars['font-size']['8'],
    lineHeight: vars['line-height']['8'],
    letterSpacing: vars['letter-spacing']['0'],
  },
  '6': {
    fontSize: vars['font-size']['10'],
    lineHeight: vars['line-height']['10'],
    letterSpacing: vars['letter-spacing']['0'],
  },
};

export const iconStyles = ({ size = 1, color = 'blue' }: Pick<AvatarProps, 'size' | 'color'>) => {
  return css`
    width: calc(${AVATAR_SIZE[size]} * 0.8);
    height: calc(${AVATAR_SIZE[size]} * 0.8);
    path {
      fill: ${AVATAR_COLOR[color].text};
    }
  `;
};

export const avatarStyle = ({
  size,
  color,
}: {
  size: AvatarSizes;
  color: AvatarColors;
}): SerializedStyles => {
  return css`
    ${flex};
    width: ${AVATAR_SIZE[size]};
    height: ${AVATAR_SIZE[size]};
    border-radius: ${vars['border-radius'][7]};
    border: ${vars['border-width']['1']} solid;
    border-color: ${AVATAR_COLOR[color].border};
    box-sizing: border-box;
    background-color: ${AVATAR_COLOR[color].fill};
    color: ${AVATAR_COLOR[color].text};
    overflow: hidden;
    position: relative;
    align-items: center;
    flex-shrink: 0;
    user-select: none;
    justify-content: center;

    // avatar has custom typography styles
    font-family: ${vars.weight.medium};
    font-size: ${AVATAR_TYPOGRAPHY[size].fontSize};
    line-height: ${AVATAR_TYPOGRAPHY[size].lineHeight};
    letter-spacing: ${AVATAR_TYPOGRAPHY[size].letterSpacing};

    img {
      border-radius: ${vars['border-radius'][7]};
      width: 100%;
      height: 100%;
    }
  `;
};
