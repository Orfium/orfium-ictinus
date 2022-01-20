import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { TooltipSize } from './Tooltip';
import 'tippy.js/dist/tippy.css';

export const tooltipStyle = ({
  size,
  isTransparent,
}: {
  size: TooltipSize;
  isTransparent: boolean;
}) => (theme: Theme): SerializedStyles => {
  const color = 'darkGrey';
  const shade = 850;
  const backgroundColor = isTransparent ? 'transparent' : theme.utils.getColor(color, shade);

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
      color: ${theme.utils.getAAColorFromSwatches(color, shade)};
      background-color: ${backgroundColor};
      max-width: ${rem(256)};
      padding: ${theme.spacing.sm};
      font-size: ${defineFontSizeBasedOnTooltipSize(size)};
      font-weight: ${theme.typography.weights.regular};
      line-height: 110%;
      border-radius: ${theme.spacing.sm};
      text-align: start;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .tippy-arrow {
      color: ${backgroundColor};
    }
  `;
};
