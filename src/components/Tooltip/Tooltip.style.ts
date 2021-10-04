import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { TooltipSize } from './Tooltip';
import 'tippy.js/dist/tippy.css';

export const tooltipStyle = ({ size }: { size: TooltipSize }) => (
  theme: Theme
): SerializedStyles => {
  const color = 'darkGrey';
  const shade = 850;
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
    background: transparent;
    .tippy-content {
      color: ${pickTextColorFromSwatches(color, shade)};
      background-color: ${backgroundColor};
      max-width: ${rem(256)};
      padding: ${theme.spacing.sm};
      font-size: ${defineFontSizeBasedOnTooltipSize(size)};
      line-height: 110%;
      border-radius: ${theme.spacing.sm};
      text-align: justify;
    }
    .tippy-arrow {
      color: ${backgroundColor};
    }
  `;
};
