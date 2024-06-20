import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { TooltipProps } from './Tooltip.types';
import { generateStylesFromTokens } from 'components/Typography/utils';

import type { Theme } from '~/theme';

export const tooltipStyle =
  ({
    isInverted = false,
    isInteractive = false,
  }: Pick<TooltipProps, 'isInverted' | 'isInteractive'>) =>
  (theme: Theme): SerializedStyles => {
    const backgroundColor = theme.tokens.colors.get(
      isInverted ? 'backgroundColor.alt' : 'backgroundColor.inverted'
    );

    const textWrap: SerializedStyles = css`
      text-align: start;
      white-space: pre-wrap;
      word-break: break-word;
    `;

    return css`
      .tooltip {
        background-color: ${backgroundColor};
        border: ${theme.dimension.borderWidth.get('default')} solid
          ${theme.tokens.colors.get(
            isInverted ? 'borderColor.decorative.default' : 'borderColor.decorative.transparent'
          )};
        box-shadow: ${theme.tokens.boxShadow.get('2')};

        z-index: 1000;

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
    `;
  };
