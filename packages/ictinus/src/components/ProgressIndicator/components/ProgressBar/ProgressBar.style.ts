import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { isUndefined } from 'lodash-es';

import type { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

const PROGRESS_INDICATOR_TOKENS = {
  height: {
    linear: vars.sizing['1'],
    linearBlock: vars.sizing['2'],
  },
};

export const progressBarContainer = ({
  isBlock,
}: Pick<ProgressIndicatorProps, 'isBlock'>): SerializedStyles => {
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
        border-radius: ${isBlock ? vars['border-radius']['0'] : vars['border-radius']['7']};
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

export const barStyles = ({
  isBlock,
}: Pick<ProgressIndicatorProps, 'isBlock'>): SerializedStyles => {
  return css`
    grid-area: bar;
    background-color: ${vars.color.palette['primary-alt'].muted};
    height: ${isBlock
      ? PROGRESS_INDICATOR_TOKENS.height.linearBlock
      : PROGRESS_INDICATOR_TOKENS.height.linear};
    border-radius: ${isBlock ? vars['border-radius']['0'] : vars['border-radius']['7']};
    overflow: hidden;
    will-change: transform;
  `;
};

export const fillStyles = ({
  status,
  value,
  isBlock,
}: Pick<ProgressIndicatorProps, 'status' | 'value' | 'isBlock'>): SerializedStyles => {
  const hasError = status === 'error';

  const getBorderRadius = () => {
    if (isBlock) return 0;

    if (isUndefined(value)) return vars['border-radius']['7'];

    return `0 ${vars['border-radius']['7']} ${vars['border-radius']['7']} 0`;
  };

  return css`
    background: ${hasError ? vars.color.text.inverted.error : vars.color.palette.primary.muted};
    height: 100%;
    border-radius: ${getBorderRadius()};
    width: ${value}%;
    transition: width 0.5s;
  `;
};
