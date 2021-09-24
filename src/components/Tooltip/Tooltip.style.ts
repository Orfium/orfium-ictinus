import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { TooltipPlacement, TooltipSize } from './Tooltip';

export const tooltipStyle = ({
  placement,
  size,
}: {
  placement: TooltipPlacement;
  size: TooltipSize;
}) => (theme: Theme): SerializedStyles => {
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
    color: ${pickTextColorFromSwatches(color, shade)} !important;
    background-color: ${backgroundColor} !important;
    max-width: ${rem(256)};
    padding: ${theme.spacing.sm} !important;
    font-size: ${defineFontSizeBasedOnTooltipSize(size)} !important;
    line-height: 110%;
    border-radius: ${theme.spacing.sm};
    text-align: justify;
    &.show {
      opacity: 1 !important;
    }
    &.place-${placement} {
      &::after {
        border-${placement}-color: ${backgroundColor} !important;
      }
    }
  `;
};

export const tooltipChildrenWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
