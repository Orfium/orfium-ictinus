import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';
import { transition } from 'theme/functions';

import { vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { FilterButtonProps } from './FilterButton';

const FILTER_TOKENS = {
  height: vars.sizing['9'],
};

export const buttonStyles =
  ({
    isActive = false,
    isPopulated = false,
    isDisabled,
    colorScheme = 'default',
  }: Pick<FilterButtonProps, 'isActive' | 'isPopulated' | 'isDisabled' | 'colorScheme'>) =>
  (theme: Theme): SerializedStyles => {
    const isGradientActive = colorScheme === 'ai' && isActive;

    const getBackgroundColor = (hasHover = false) => {
      if (isGradientActive) {
        return 'transparent';
      }

      if (isActive) {
        return vars.color.palette.primary.contrast;
      }

      if (isPopulated) {
        if (hasHover) return vars.color.palette.secondary.muted;

        return vars.color.palette.secondary.base;
      }

      if (hasHover) return vars.color.palette.secondary.muted;

      return vars.color.palette.secondary.base;
    };

    return css`
      display: flex;
      align-items: center;

      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

      height: ${FILTER_TOKENS.height};
      padding: 0 ${vars.spacing['5']} 0 ${vars.spacing['6']};

      gap: ${vars.spacing['3']};

      background-color: ${getBackgroundColor()};
      background-image: ${isGradientActive ? vars.color.gradient['1'] : 'none'};
      background-origin: border-box;
      color: ${isActive ? vars.color.text.inverted.primary : vars.color.text.default.active};
      border: ${vars['border-width']['1']} solid
        ${isGradientActive ? 'transparent' : vars.color['border-color'].interactive.default};
      border-radius: ${vars['border-radius']['7']};

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.label02'))};

      /* Override hardcoded SVG fills (e.g. gradient icons) so they inherit button color when active */
      ${isActive
        ? css`
            & > svg path {
              fill: currentColor;
            }
          `
        : ''}

      &:not([disabled]) {
        &:focus-visible,
        &:hover {
          background-color: ${getBackgroundColor(true)};
        }
      }

      transition: background-color 0.1s ease-in-out;

      opacity: ${isDisabled ? theme.tokens.disabledState.get('default') : 1};
    `;
  };

export const iconStyles =
  ({ isActive }: Pick<FilterButtonProps, 'isActive'>) =>
  (): SerializedStyles => {
    return css`
      transform: rotate(${isActive ? '180' : '0'}deg);
      ${transition(0.2)}
    `;
  };
