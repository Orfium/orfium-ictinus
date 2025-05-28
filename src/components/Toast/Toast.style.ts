import { css } from '@emotion/react';
import type { Theme } from '~/theme';
import { rem } from '~/theme/utils';

export const styles = {
  toastRegion: (theme: Theme) => css`
    isolation: isolate;
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    gap: ${theme.dimension.spacing.get('sm')};
  `,
  'bottom left': (theme: Theme) => css`
    bottom: ${theme.dimension.spacing.get('3xl')};
    left: ${theme.dimension.spacing.get('3xl')};
    align-items: flex-start;
  `,
  'bottom right': (theme: Theme) => css`
    bottom: ${theme.dimension.spacing.get('3xl')};
    right: ${theme.dimension.spacing.get('3xl')};
    align-items: flex-end;
  `,
  toast: (theme: Theme) => css`
    --border-width: ${theme.dimension.borderWidth.get('default')};

    ${theme.tokens.typography.get('normal.body02')};
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: ${theme.dimension.spacing.get('xl')};
    min-width: ${rem(240)};
    padding: calc(${theme.dimension.spacing.get('md')} - ${rem(1)});
    border-radius: ${theme.dimension.borderRadius.get('md')};
    background-color: ${theme.tokens.colors.get('backgroundColor.inverted')};
    color: ${theme.tokens.colors.get('textColor.inverted.primary')};
    border: ${rem(1)} solid ${theme.tokens.colors.get('borderColor.decorative.inverted')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    view-transition-class: toast;
    view-transition-name: var(--view-transition-name);

    &:has([data-slot='button']) {
      padding: calc(${theme.dimension.spacing.get('sm')} - var(--border-width))
        calc(${theme.dimension.spacing.get('md')} - var(--border-width));
    }

    @media (prefers-reduced-motion) {
      view-transition-name: none;
      view-transition-class: none;
    }
  `,
  toastContent: (theme: Theme) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.dimension.spacing.get('xl')};
    flex-grow: 1;
  `,
  toastActions: (theme: Theme) => css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: ${theme.dimension.spacing.get('sm')};
  `,
};
