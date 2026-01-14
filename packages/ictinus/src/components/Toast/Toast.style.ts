import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import type { Theme } from '~/theme';
import type { ToastOptions } from './Toast.types';

export const styles = {
  toastRegion: () => css`
    isolation: isolate;
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    container-type: inline-size;
    bottom: ${vars.spacing['9']};
    left: ${vars.spacing['9']};
    right: ${vars.spacing['9']};
    gap: ${vars.spacing['4']};
    pointer-events: none;
    z-index: 9999;
  `,
  'bottom left': css`
    align-items: flex-start;
  `,
  'bottom right': css`
    align-items: flex-end;
  `,
  toast: (props: ToastOptions) => (theme: Theme) => css`
    --toast-border-width: ${vars['border-width']['1']};
    --toast-min-content-width: ${rem(100)};

    ${theme.tokens.typography.get('normal.body02')};
    pointer-events: auto;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    display: inline-grid;
    grid-template-columns: auto minmax(var(--toast-min-content-width), 1fr) auto;
    grid-template-areas: 'icon content actions close';
    align-items: center;
    padding: calc(${vars.spacing['5']} - ${rem(1)});
    border-radius: ${vars['border-radius']['2']};
    background: ${vars.color.background.alt};
    border: ${rem(1)} solid ${getBorderColor(props.status)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    view-transition-class: toast;
    view-transition-name: var(--view-transition-name);

    &:has([data-slot='button']) {
      padding: calc(${vars.spacing['4']} - var(--toast-border-width))
        calc(${vars.spacing['5']} - var(--toast-border-width));
    }

    @container (max-width: calc(600px - 1px)) {
      grid-template-areas:
        'icon content close'
        'icon actions close';
      align-items: flex-start;

      &:has([data-slot='button']) {
        padding: calc(${vars.spacing['5']} - var(--toast-border-width))
          calc(${vars.spacing['5']} - var(--toast-border-width));
      }
    }

    @media (prefers-reduced-motion) {
      view-transition-name: none;
      view-transition-class: none;
    }
  `,
  icon: () => css`
    grid-area: icon;
    margin-right: ${vars.spacing['5']};
    pointer-events: none;
  `,
  dismiss: () => css`
    grid-area: close;
    justify-self: end;
    margin-left: ${vars.spacing['6']};
  `,
  toastContent: css`
    grid-area: content;
    cursor: default;
  `,
  toastActions: () => css`
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
  `,
};

const getBorderColor = (status: ToastOptions['status']) => {
  switch (status) {
    case 'informational':
      return vars.color.indicators.brand;
    case 'error':
      return vars.color.text.default.error;
    case 'warning':
      return vars.color.indicators.warning;
    case 'success':
      return vars.color.indicators.success;
    default:
      return vars.color['border-color'].decorative.default;
  }
};

export const getIconColor = (status: ToastOptions['status']) => {
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
