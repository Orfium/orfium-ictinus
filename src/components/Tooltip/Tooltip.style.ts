import { rem } from 'polished';
import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';

export const tooltipStyle = () => (theme: Theme): SerializedStyles => css`
  .tippy-content {
    background-color: ${theme.utils.getColor('darkBlue', 600)};
    color: ${theme.utils.getColor('neutralWhite', 100)};
    border-radius: ${rem(4)};
    padding: ${theme.spacing.sm};
    max-width: ${rem(160)};
    font-size: ${theme.typography.fontSizes[12]};
  }
  .tippy-arrow {
    color: ${theme.utils.getColor('darkBlue', 600)};
  }
`;

export const tooltipChildrenWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: inline-block;
`;
