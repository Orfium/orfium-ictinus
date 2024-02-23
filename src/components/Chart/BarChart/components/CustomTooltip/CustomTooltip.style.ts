import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const tickStyle = (fill: string) => (): SerializedStyles =>
  css`
    width: inherit;
    height: inherit;
    color: ${fill};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

export const tooltipStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: block;
      position: fixed;
      top: -33%;
      left: 106%;
      color: ${theme.globals.colors.get('neutral.1')};
      background-color: ${theme.tokens.colors.get('backgroundColor.inverted')};
      opacity: 90%;
      border-radius: ${theme.globals.spacing.get('3')};
      padding: ${theme.globals.spacing.get('4')};
    `;

export const tooltipArrowStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      content: '';
      position: absolute;
      border-style: solid;
      margin-top: ${rem(-5)};
      border-width: ${rem(5)};
      border-color: transparent ${theme.tokens.colors.get('backgroundColor.inverted')} transparent
        transparent;
      top: 50%;
      left: 100%;
      opacity: 90%;
    `;
