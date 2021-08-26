import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { TooltipSize } from './Tooltip';
import 'tippy.js/dist/tippy.css';

export const tooltipStyle = ({ size }: { size: TooltipSize }) => (
  theme: Theme
): SerializedStyles => {
  const color = theme.overrides.tooltip.background.color;
  const shade = theme.overrides.tooltip.background.shade;
  const backgroundColor = theme.utils.getColor(color, shade);

  const defineFontSizeBasedOnTooltipSize = (size: TooltipSize) => {
    if (size === 'large') {
      return theme.typography.fontSizes['16'];
    } else if (size === 'small') {
      return theme.typography.fontSizes['12'];
    }

    return theme.typography.fontSizes['14'];
  };

  return css`
    color: ${pickTextColorFromSwatches(color, shade)};
    background-color: ${backgroundColor};
    max-width: ${rem(256)};
    padding: ${theme.spacing.sm};
    font-size: ${defineFontSizeBasedOnTooltipSize(size)};
    line-height: 110%;
    border-radius: ${theme.spacing.sm};
    text-align: justify;
    &.tippy-box[data-placement^='left'] > .tippy-arrow:before {
      border-left-color: ${backgroundColor} !important;
    }
    &.tippy-box[data-placement^='right'] > .tippy-arrow:before {
      border-right-color: ${backgroundColor} !important;
    }
    &.tippy-box[data-placement^='top'] > .tippy-arrow:before {
      border-top-color: ${backgroundColor} !important;
    }
    &.tippy-box[data-placement^='bottom'] > .tippy-arrow:before {
      border-bottom-color: ${backgroundColor} !important;
    }
  `;
};
