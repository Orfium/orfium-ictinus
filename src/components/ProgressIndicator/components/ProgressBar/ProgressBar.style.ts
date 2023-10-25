import { css, SerializedStyles } from '@emotion/react';
import { isUndefined } from 'lodash';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getProgressIndicatorTokens } from 'components/ProgressIndicator/ProgressIndicator.tokens';
import { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

export const progressBarContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getProgressIndicatorTokens(theme);

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
          border-radius: ${tokens('borderRadius')};
          animation: indeterminate 1.5s infinite ease-in-out;
          will-change: transform;
        }
      }

      @keyframes indeterminate {
        from {
          transform: translateX(-100%);
        }

        to {
          transform: translateX(250px);
        }
      }
    `;
  };

export const barStyles =
  ({ hasBorderRadius }: Pick<ProgressIndicatorProps, 'hasBorderRadius'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getProgressIndicatorTokens(theme);

    return css`
      grid-area: bar;
      background-color: ${tokens('track')};
      height: ${tokens('horizontalHeight')};
      border-radius: ${hasBorderRadius ? tokens('borderRadius') : 0};
      overflow: hidden;
      will-change: transform;
    `;
  };

export const fillStyles =
  ({ status, value }: Pick<ProgressIndicatorProps, 'status' | 'value'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getProgressIndicatorTokens(theme);

    const hasError = status === 'error';

    return css`
      background: ${hasError ? tokens('error') : tokens('active')};
      height: 100%;
      border-radius: ${isUndefined(value)
        ? tokens('borderRadius')
        : `0 ${tokens('borderRadius')} ${tokens('borderRadius')} 0`};
      width: ${value}%;
      transition: width 0.5s;
    `;
  };
