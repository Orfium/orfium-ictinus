import { css } from '@emotion/react';
import type { Theme } from '~/theme';
import { rem } from '~/theme/utils';
import type { ToastOptions } from './Toast.types';

export const styles = {
  toastRegion: (theme: Theme) => css`
    isolation: isolate;
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    container-type: inline-size;
    bottom: ${theme.dimension.spacing.get('3xl')};
    left: ${theme.dimension.spacing.get('3xl')};
    right: ${theme.dimension.spacing.get('3xl')};
    gap: ${theme.dimension.spacing.get('sm')};
    pointer-events: none;
    z-index: 10;
  `,
  'bottom left': css`
    align-items: flex-start;
  `,
  'bottom right': css`
    align-items: flex-end;
  `,
  toast: (props: ToastOptions) => (theme: Theme) => css`
    --toast-border-width: ${theme.dimension.borderWidth.get('default')};
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
    padding: calc(${theme.dimension.spacing.get('md')} - ${rem(1)});
    border-radius: ${theme.dimension.borderRadius.get('md')};
    background: ${theme.tokens.colors.get('backgroundColor.alt')};
    border: ${rem(1)} solid ${getBorderColor(props.status, theme)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    view-transition-class: toast;
    view-transition-name: var(--view-transition-name);

    &:has([data-slot='button']) {
      padding: calc(${theme.dimension.spacing.get('sm')} - var(--toast-border-width))
        calc(${theme.dimension.spacing.get('md')} - var(--toast-border-width));
    }

    @container (max-width: calc(600px - 1px)) {
      grid-template-areas:
        'icon content close'
        'icon actions close';
      align-items: flex-start;

      &:has([data-slot='button']) {
        padding: calc(${theme.dimension.spacing.get('md')} - var(--toast-border-width))
          calc(${theme.dimension.spacing.get('md')} - var(--toast-border-width));
      }
    }

    @media (prefers-reduced-motion) {
      view-transition-name: none;
      view-transition-class: none;
    }
  `,
  icon: (theme: Theme) => css`
    grid-area: icon;
    margin-right: ${theme.dimension.spacing.get('md')};
    pointer-events: none;
  `,
  dismiss: (theme: Theme) => css`
    grid-area: close;
    justify-self: end;
    margin-left: ${theme.dimension.spacing.get('lg')};
  `,
  toastContent: css`
    grid-area: content;
    cursor: default;
  `,
  toastActions: (theme: Theme) => css`
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
  `,
};

const getBorderColor = (status: ToastOptions['status'], theme: Theme) => {
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

export const getIconColor = (status: ToastOptions['status'], theme: Theme) => {
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
