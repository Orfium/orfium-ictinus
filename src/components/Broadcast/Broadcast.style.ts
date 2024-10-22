import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

import type { BroadcastProps } from './Broadcast.types';
import { generateStylesFromTokens } from '../Typography/utils';

const broadcastStyles = (props: BroadcastProps) => (theme: Theme) =>
  css`
    --_border-width: ${theme.dimension.borderWidth.get('default')};
    --_outline-width: ${theme.dimension.borderWidth.get('focused')};
    --_min-height: ${rem(44)};
    --_min-content-width: ${rem(100)};

    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    padding: calc(${theme.dimension.spacing.get('md')} - var(--_border-width))
      calc(${theme.dimension.spacing.get('md')} - var(--_border-width));
    display: inline-grid;
    grid-template-columns: auto minmax(var(--_min-content-width), 1fr) auto;
    grid-template-areas: 'icon content actions close';
    align-items: center;
    background: ${theme.tokens.colors.get('palette.secondary.muted')};
    border-radius: ${theme.dimension.borderRadius.get('md')};
    border: 1px solid ${getBorderColor(props.status, theme)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: sans-serif;
    min-height: var(--_min-height);
    outline: none;
    outline-offset: ${rem(2)};
    transition: outline-offset 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-visible {
      outline-offset: 0;
      outline: var(--_outline-width) solid
        ${theme.tokens.colors.get('borderColor.interactive.focused')};
    }

    &:has([data-slot='button']) {
      padding: calc(${theme.dimension.spacing.get('sm')} - var(--_border-width))
        calc(${theme.dimension.spacing.get('md')} - var(--_border-width));
    }

    /* Since we match desktop first, below 600px should become 599px */
    @container (max-width: calc(600px - 1px)) {
      grid-template-areas:
        'icon content close'
        'icon actions close';
      align-items: flex-start;

      &:has([data-slot='button']) {
        padding: calc(${theme.dimension.spacing.get('md')} - var(--_border-width))
          calc(${theme.dimension.spacing.get('md')} - var(--_border-width));
      }
    }

    @media (prefers-reduced-motion) {
      transition: none;
    }
  `;

const iconStyles = () => (theme: Theme) =>
  css`
    grid-area: icon;
    margin-right: ${theme.dimension.spacing.get('md')};
    pointer-events: none;
  `;

const contentStyles = () => (theme: Theme) =>
  css`
    ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

    grid-area: content;
    cursor: default;
  `;

const actionsStyles = () => (theme: Theme) =>
  css`
    grid-area: actions;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: ${theme.dimension.spacing.get('sm')};
    margin-left: ${theme.globals.spacing.get('7')};

    @container (max-width: calc(600px - 1px)) {
      margin-left: 0;
      margin-top: ${theme.dimension.spacing.get('sm')};
    }
  `;

const dismissStyles = () => (theme: Theme) =>
  css`
    grid-area: close;
    justify-self: end;
    margin-left: ${theme.dimension.spacing.get('lg')};
  `;

const getBorderColor = (status: BroadcastProps['status'], theme: Theme) => {
  switch (status) {
    case 'informational':
      return theme.tokens.colors.get('indicators.brand');
    case 'error':
      return theme.tokens.colors.get('textColor.default.error');
    case 'warning':
      return theme.tokens.colors.get('indicators.warning');
    case 'success':
      return theme.tokens.colors.get('indicators.success');
    default:
      return theme.tokens.colors.get('borderColor.decorative.default');
  }
};

export const getIconColor = (status: BroadcastProps['status'], theme: Theme) => {
  switch (status) {
    case 'informational':
      return theme.tokens.colors.get('indicators.brand');
    case 'error':
      return theme.tokens.colors.get('indicators.error');
    case 'warning':
      return theme.tokens.colors.get('indicators.warning');
    case 'success':
      return theme.tokens.colors.get('indicators.success');
    default:
      return theme.tokens.colors.get('indicators.brand');
  }
};

export const styles = {
  broadcast: broadcastStyles,
  icon: iconStyles,
  content: contentStyles,
  actions: actionsStyles,
  dismiss: dismissStyles,
};
