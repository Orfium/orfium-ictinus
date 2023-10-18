import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { getTooltipTokens } from './Tooltip.tokens';
import { TooltipProps } from './Tooltip.types';
import { Theme } from '../../theme';
import 'tippy.js/dist/tippy.css';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const tooltipStyle =
  ({
    isInverted = false,
    isInteractive = false,
  }: Pick<TooltipProps, 'isInverted' | 'isInteractive'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTooltipTokens(theme);

    const backgroundColor = tokens(
      `backgroundColor.${isInverted ? 'inverted' : 'default'}` as const
    );

    const textWrap = {
      'text-align': 'start',
      'white-space': 'pre-wrap',
      'word-break': 'break-word',
    };

    return css`
      background-color: ${backgroundColor};
      border: ${tokens('borderWidth.default')} solid
        ${tokens(`borderColor.${isInverted ? 'inverted' : 'default'}` as const)};
      box-shadow: ${tokens('boxShadow')};

      .tippy-content {
        background-color: ${backgroundColor};
        max-width: ${!isInteractive && rem(256)};
        padding: ${tokens(`padding.${isInteractive ? 'interactive' : 'text'}` as const)};
        border-radius: ${tokens('borderRadius')};
        color: ${!isInteractive &&
        tokens(`textColor.${isInverted ? 'inverted' : 'default'}` as const)};

        ${!isInteractive && generateStylesFromTokens(tokens('text'))};

        ${!isInteractive && textWrap};
      }

      .tippy-arrow::before {
        color: ${backgroundColor};
      }
    `;
  };
