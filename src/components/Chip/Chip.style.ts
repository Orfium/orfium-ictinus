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

export const chipStyle = ({
  styleType,
  fill = 'greyScale',
  isSelected,
  onClear,
  onClick,
}: Props) => (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${theme.spacing.lg};
  border-radius: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSizes['12']};
  font-weight: ${theme.typography.weights.medium};
  line-height: normal;
  box-sizing: border-box;
  padding: ${theme.spacing.xsm} ${theme.spacing.sm};
  background-color: ${styleType === 'read-only' || onClear || isSelected
    ? theme.utils.getColor(fill, 50)
    : theme.palette.white};
  color: ${theme.utils.getColor('darkGrey', 850)}; //use pickTextColorFromSwatches() instead
  border: ${rem(1)} solid
    ${styleType === 'read-only' || onClear || isSelected
      ? theme.utils.getColor(fill, 550)
      : theme.utils.getColor('lightGrey', 200)};
  cursor: ${onClick ? 'pointer' : 'auto'};
  width: fit-content;
  transition: background-color 150ms linear;

  &:hover {
    background: ${styleType === 'read-only' || onClear || isSelected
      ? theme.utils.getColor(fill, 100)
      : theme.utils.getColor('lightGrey', null, 'pale')};
  }

  > :not(:last-child) {
    margin-right: ${theme.spacing.xsm};
  }
`;

export const closeIconWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
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
