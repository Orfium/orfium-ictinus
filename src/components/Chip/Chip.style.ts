import { css, SerializedStyles } from '@emotion/react';
import { darken, lighten, rem } from 'polished';
import { flexCenterVertical } from 'theme/functions';
import { BASE_SHADE, colorShades, pickTextColorFromSwatches } from 'theme/palette';
import { flatColors } from 'theme/palette';

import { Theme } from '../../theme';
import { Props } from './Chip';

/** Calculates the label specific height based on the size passed to it
 * These sizes are specific to this component thus these are placed here and not in the config **/
const styleBasedOnSize = (
  theme: Theme,
  size?: 'md' | 'sm',
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element
) => {
  const hasIcon: boolean = leftIcon !== undefined || rightIcon !== undefined;
  switch (size) {
    case 'sm':
      return `
      height: ${rem(20)};
      border-radius: ${rem(16.5)};
      font-size: ${theme.typography.fontSizes['10']};
      `;
    default:
      return `
      height: ${rem(24)};
      border-radius: ${rem(12.5)};
      font-size: ${theme.typography.fontSizes['12']};
      `;
  }
};

const wrapperStyleSwitch = (
  theme: Theme,
  styleType?: 'filled' | 'outlined',
  fill?: typeof flatColors[number],
  shade: typeof colorShades[number] = BASE_SHADE
) => {
  switch (styleType) {
    case 'outlined': {
      const fillColor = fill
        ? theme.utils.getColor(fill, shade)
        : theme.utils.getColor('lightGrey', shade);
      const borderColor = shade < 500 ? darken('0.5', fillColor) : lighten('0.5', fillColor);

      return `
        background-color: ${fill ? fillColor : 'transparent'};
        color: ${fill ? pickTextColorFromSwatches(fill, shade) : '#232323'};
        border: 1px solid ${borderColor};
      `;
    }
    case 'filled':
    default:
      return `
        background-color: ${
          fill ? theme.utils.getColor(fill, shade) : theme.utils.getColor('lightGrey', 50)
        };
        color: ${fill ? pickTextColorFromSwatches(fill, shade) : '#232323'};
        border: 1px solid ${
          fill ? theme.utils.getColor(fill, shade) : theme.utils.getColor('lightGrey', 50)
        };
      `;
  }
};

export const wrapperStyle = ({ styleType, size, fill, shade, leftIcon, rightIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  ${flexCenterVertical};
  ${styleBasedOnSize(theme, size, leftIcon, rightIcon)};
  box-sizing: border-box;
  padding-left: ${leftIcon ? 'inherit' : rem(8)};
  padding-right: ${rightIcon ? 'inherit' : rem(8)};
  ${wrapperStyleSwitch(theme, styleType, fill, shade)};
  width: fit-content;
`;

export const iconWrapperStyle = (
  size: 'md' | 'sm',
  iconHandler?: React.ReactEventHandler
): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${size === 'md' ? rem(16) : rem(14)};
  width: ${size === 'md' ? rem(16) : rem(14)};
  & > * {
    max-height: 100%;
  }

  cursor: ${iconHandler ? 'pointer' : 'auto'};
  padding-left: ${rem(4)};
  padding-right: ${rem(4)};
`;
