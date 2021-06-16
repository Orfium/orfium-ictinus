import { rem } from 'polished';
import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { TooltipSize } from './Tooltip';

export const tooltipStyle = ({ size }: { size: TooltipSize }) => (
  theme: Theme
): SerializedStyles => {
  const color = theme.overrides.tooltip.background.color;
  const shade = theme.overrides.tooltip.background.shade;
  const backgroundColor = theme.utils.getColor(color, shade);

  const defineFontSizeBasedOnTooltipSize = (size: TooltipSize) => {
    if (size === 'normal') {
      return theme.typography.fontSizes['16'];
    } else if (size === 'small') {
      return theme.typography.fontSizes['12'];
    }

    return theme.typography.fontSizes['14'];
  };

  return css`
    color: ${pickTextColorFromSwatches(color, shade)} !important;
    background-color: ${backgroundColor} !important;
    max-width: ${rem(256)};
    padding: ${theme.spacing.sm} !important;
    font-size: ${defineFontSizeBasedOnTooltipSize(size)} !important;
    line-height: 110%;
    border-radius: ${theme.spacing.sm};
    &.place-right {
      &::after {
        border-right-color: ${backgroundColor} !important;
      }
    }
    &.place-left {
      &::after {
        border-left-color: ${backgroundColor} !important;
      }
    }
    &.place-top {
      &::after {
        border-top-color: ${backgroundColor} !important;
      }
    }
    &.place-bottom {
      &::after {
        border-bottom-color: ${backgroundColor} !important;
      }
    }
  `;
};

export const tooltipChildrenWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
