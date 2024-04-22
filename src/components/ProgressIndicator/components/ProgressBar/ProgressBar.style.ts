import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { isUndefined } from 'lodash';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getProgressIndicatorTokens } from 'components/ProgressIndicator/ProgressIndicator.tokens';
import type { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

export const progressBarContainer =
  ({ isBlock }: Pick<ProgressIndicatorProps, 'isBlock'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: grid;
      grid-template-areas:
        'label value'
        'bar bar';
      grid-template-columns: 1fr auto;
      gap: ${rem(4)};
      width: 100%;

      &:not([aria-valuenow]) {
        .fill {
          width: 50%;
          border-radius: ${isBlock
            ? theme.dimension.borderRadius.get('none')
            : theme.dimension.borderRadius.get('circle')};
          animation: indeterminate 1.7s infinite ease-in-out;
          will-change: transform;
        }
      }

      @keyframes indeterminate {
        from {
          transform: translateX(-100%);
        }

        to {
          transform: translateX(200%);
        }
      }
    `;
  };

export const barStyles =
  ({ isBlock }: Pick<ProgressIndicatorProps, 'isBlock'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getProgressIndicatorTokens(theme);

    return css`
      grid-area: bar;
      background-color: ${theme.tokens.colors.get('palette.primaryAlt.muted')};
      height: ${isBlock ? tokens('height.linearBlock') : tokens('height.linear')};
      border-radius: ${isBlock
        ? theme.dimension.borderRadius.get('none')
        : theme.dimension.borderRadius.get('circle')};
      overflow: hidden;
      will-change: transform;
    `;
  };

export const fillStyles =
  ({ status, value, isBlock }: Pick<ProgressIndicatorProps, 'status' | 'value' | 'isBlock'>) =>
  (theme: Theme): SerializedStyles => {
    const hasError = status === 'error';

    const getBorderRadius = () => {
      if (isBlock) return 0;

      if (isUndefined(value)) return theme.dimension.borderRadius.get('circle');

      return `0 ${theme.dimension.borderRadius.get('circle')} ${theme.dimension.borderRadius.get(
        'circle'
      )} 0`;
    };

    return css`
      background: ${hasError
        ? theme.tokens.colors.get('textColor.inverted.error')
        : theme.tokens.colors.get('palette.primary.muted')};
      height: 100%;
      border-radius: ${getBorderRadius()};
      width: ${value}%;
      transition: width 0.5s;
    `;
  };
