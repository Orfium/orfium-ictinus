import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { TooltipSize } from './Tooltip';
import 'tippy.js/dist/tippy.css';

export const tooltipStyle =
  ({ size, isTransparent }: { size: TooltipSize; isTransparent: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const color = 'darkGrey';
    const shade = 850;
    const backgroundColor = isTransparent ? 'transparent' : theme.utils.getColor(color, shade);

    const defineFontSizeBasedOnTooltipSize = (size: TooltipSize) => {
      if (size === 'large') {
        return theme.typography.fontSizes.get('4');
      } else if (size === 'small') {
        return theme.typography.fontSizes.get('2');
      }

      return theme.typography.fontSizes.get('3');
    };

    return css`
      background: transparent;

      .tippy-content {
        color: ${theme.utils.getAAColorFromSwatches(color, shade)};
        background-color: ${backgroundColor};
        max-width: ${rem(256)};
        padding: ${theme.spacing.get('4')};
        font-size: ${defineFontSizeBasedOnTooltipSize(size)};
        font-weight: ${theme.typography.weights.get('regular')};
        line-height: 110%;
        border-radius: ${theme.spacing.get('4')};
        text-align: start;
        white-space: pre-wrap;
        word-break: break-word;
      }

      .tippy-arrow {
        color: ${backgroundColor};
      }
    `;
  };
