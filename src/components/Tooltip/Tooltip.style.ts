import { rem } from 'polished';
import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { pickTextColorFromSwatches } from '../../theme/palette';

export const tooltipStyle = () => (theme: Theme): SerializedStyles => {
  const color = theme.overrides.tooltip.background.color;
  const shade = theme.overrides.tooltip.background.shade;
  const backgroundColor = theme.utils.getColor(color, shade);

  return css`
    .tippy-content {
      background-color: ${backgroundColor};
      color: ${pickTextColorFromSwatches(color, shade)};
      border-radius: ${rem(4)};
      padding: ${theme.spacing.sm};
      max-width: ${rem(160)};
      font-size: ${theme.typography.fontSizes[12]};
    }
    .tippy-arrow {
      color: ${backgroundColor};
    }
  `;
};

export const tooltipChildrenWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: inline-block;
`;
