import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { generateStylesFromTokens } from '../Typography/utils';
import type { InlineAlertProps } from './InlineAlert.types';

const inlineAlertStyles = (props: InlineAlertProps) => css`
  --_border-width: ${vars['border-width']['1']};
  --_outline-width: ${vars['border-width']['3']};
  --_min-height: ${rem(44)};
  --_min-content-width: ${rem(100)};

  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  padding: calc(${vars.spacing['5']} - var(--_border-width))
    calc(${vars.spacing['5']} - var(--_border-width));
  display: inline-grid;
  grid-template-columns: auto minmax(var(--_min-content-width), 1fr) auto;
  grid-template-areas: 'icon content actions close';
  align-items: center;
  background: ${props.isAlt ? vars.color.background.default : vars.color.palette.secondary.muted};
  border-radius: ${vars['border-radius']['2']};
  border: var(--_border-width) solid ${vars.color['border-color'].decorative.default};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: sans-serif;
  min-height: var(--_min-height);
  outline: none;
  outline-offset: ${rem(2)};
  transition: outline-offset 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    outline-offset: 0;
    outline: var(--_outline-width) solid ${vars.color['border-color'].interactive.focused};
  }

  &:has([data-slot='button']) {
    padding: calc(${vars.spacing['4']} - var(--_border-width))
      calc(${vars.spacing['5']} - var(--_border-width));
  }

  /* Since we match desktop first, below 600px should become 599px */
  @container (max-width: calc(600px - 1px)) {
    grid-template-areas:
      'icon content close'
      'icon actions close';
    align-items: flex-start;

    &:has([data-slot='button']) {
      padding: calc(${vars.spacing['5']} - var(--_border-width))
        calc(${vars.spacing['5']} - var(--_border-width));
    }
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;

const iconStyles = () => css`
  grid-area: icon;
  margin-right: ${vars.spacing['5']};
  pointer-events: none;
`;

const contentStyles = () => (theme: Theme) => css`
  ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

  grid-area: content;
  cursor: default;
`;

const actionsStyles = () => css`
  grid-area: actions;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${vars.spacing['4']};
  margin-left: ${vars.spacing['7']};

  @container (max-width: calc(600px - 1px)) {
    margin-left: 0;
    margin-top: ${vars.spacing['4']};
  }
`;

const dismissStyles = () => css`
  grid-area: close;
  justify-self: end;
  margin-left: ${vars.spacing['6']};
`;

export const getIconColor = (status: InlineAlertProps['status']) => {
  switch (status) {
    case 'informational':
      return vars.color.indicators.brand;
    case 'error':
      return vars.color.indicators.error;
    case 'warning':
      return vars.color.indicators.warning;
    case 'success':
      return vars.color.indicators.success;
    default:
      return vars.color.indicators.brand;
  }
};

export const styles = {
  'inline-alert': inlineAlertStyles,
  icon: iconStyles,
  content: contentStyles,
  actions: actionsStyles,
  dismiss: dismissStyles,
};
