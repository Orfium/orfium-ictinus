import { css, SerializedStyles } from '@emotion/react';
import { darken, lighten } from 'polished';
import { flexCenterVertical } from 'theme/functions';
import { BASE_SHADE, colorShades, pickTextColorFromSwatches } from 'theme/palette';
import { flatColors } from 'theme/palette';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { Props } from './Chip';

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
        border: ${rem(1)} solid ${borderColor};
      `;
    }
    case 'filled':
    default:
      return `
        background-color: ${
          fill ? theme.utils.getColor(fill, shade) : theme.utils.getColor('lightGrey', 50)
        };
        color: ${fill ? pickTextColorFromSwatches(fill, shade) : '#232323'};
        border: ${rem(1)} solid ${
        fill ? theme.utils.getColor(fill, shade) : theme.utils.getColor('lightGrey', 50)
      };
      `;
  }
};

export const wrapperStyle = ({ styleType, fill, shade, leftIcon, rightIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${theme.spacing.lg};
  border-radius: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSizes['12']};
  box-sizing: border-box;
  padding-left: ${leftIcon ? 'inherit' : rem(8)};
  padding-right: ${rightIcon ? 'inherit' : rem(8)};
  ${wrapperStyleSwitch(theme, styleType, fill, shade)};
  width: fit-content;
`;

export const iconWrapperStyle = (iconHandler?: React.ReactEventHandler): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(16)};
  width: ${rem(16)};
  & > * {
    max-height: 100%;
  }

  cursor: ${iconHandler ? 'pointer' : 'auto'};
  padding-left: ${rem(4)};
  padding-right: ${rem(4)};
`;
