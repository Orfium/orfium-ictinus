import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import { generateStylesFromTokens } from 'components/Typography/utils';
import type { TooltipProps } from './Tooltip.types';

import type { Theme } from '~/theme';

export const tooltipStyle =
  ({
    isInverted = false,
    isInteractive = false,
  }: Pick<TooltipProps, 'isInverted' | 'isInteractive'>) =>
  (theme: Theme): SerializedStyles => {
    const backgroundColor = vars.color.background[isInverted ? 'alt' : 'inverted'];

    const textWrap: SerializedStyles = css`
      text-align: start;
      white-space: pre-wrap;
      word-break: break-word;
    `;

    return css`
      .tooltip {
        background-color: ${backgroundColor};
        border: ${vars['border-width']['1']} solid
          ${vars.color['border-color'].decorative[isInverted ? 'default' : 'transparent']};
        box-shadow: ${vars['box-shadow']['2']};

        z-index: 1000;

        max-width: ${!isInteractive && rem(256)};
        padding: ${vars.spacing[isInteractive ? '6' : '4']};
        border-radius: ${vars['border-radius']['2']};
        color: ${!isInteractive && vars.color.text[isInverted ? 'default' : 'inverted'].primary};

        ${!isInteractive && generateStylesFromTokens(theme.tokens.typography.get('normal.body03'))};

        ${!isInteractive && textWrap};
      }
    `;
  };
