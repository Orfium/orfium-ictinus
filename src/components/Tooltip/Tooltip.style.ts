import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { TooltipProps } from './Tooltip.types';
import type { Theme } from '../../theme';
import 'tippy.js/dist/tippy.css';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const tooltipStyle =
  ({
    isInverted = false,
    isInteractive = false,
  }: Pick<TooltipProps, 'isInverted' | 'isInteractive'>) =>
  (theme: Theme): SerializedStyles => {
    const backgroundColor = theme.tokens.colors.get(
      isInverted ? 'backgroundColor.alt' : 'backgroundColor.inverted'
    );

    const textWrap = {
      'text-align': 'start',
      'white-space': 'pre-wrap',
      'word-break': 'break-word',
    };

    return css`
      background-color: ${backgroundColor};
      border: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get(
          isInverted ? 'borderColor.decorative.default' : 'borderColor.decorative.transparent'
        )};
      box-shadow: ${theme.tokens.boxShadow.get('2')};

      .tippy-content {
        background-color: ${backgroundColor};
        max-width: ${!isInteractive && rem(256)};
        padding: ${theme.dimension.spacing.get(isInteractive ? 'lg' : 'sm')};
        border-radius: ${theme.dimension.borderRadius.get('md')};
        color: ${!isInteractive &&
        theme.tokens.colors.get(
          isInverted ? 'textColor.default.primary' : 'textColor.inverted.primary'
        )};

        ${!isInteractive && generateStylesFromTokens(theme.tokens.typography.get('normal.body03'))};

        ${!isInteractive && textWrap};
      }

      .tippy-arrow::before {
        color: ${backgroundColor};
      }
    `;
  };
