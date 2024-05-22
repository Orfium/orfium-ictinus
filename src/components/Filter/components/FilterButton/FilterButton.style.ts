import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

import type { FilterButtonProps } from './FilterButton';
import { FILTER_WIDTH } from 'components/Filter/constants';
import { getFilterTokens } from 'components/Filter/Filter.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const buttonStyles =
  ({
    isActive = false,
    isPopulated = false,
    isMulti = false,
    isDisabled,
  }: Pick<FilterButtonProps, 'isActive' | 'isPopulated' | 'isMulti' | 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getFilterTokens(theme);

    const getBackgroundColor = (hasHover = false) => {
      if (isActive) {
        return theme.tokens.colors.get('palette.primary.contrast');
      }

      if (isPopulated) {
        if (hasHover) return theme.tokens.colors.get('palette.secondary.muted');

        return theme.tokens.colors.get('palette.secondary.base');
      }

      if (hasHover) return theme.tokens.colors.get('palette.secondary.muted');

      return theme.tokens.colors.get('palette.secondary.base');
    };

    return css`
      display: flex;
      align-items: center;

      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

      height: ${tokens('height')};
      padding: 0 ${theme.dimension.spacing.get('md')} 0 ${theme.dimension.spacing.get('lg')};

      max-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].maxWidth)};

      gap: ${theme.dimension.spacing.get('xs')};

      background-color: ${getBackgroundColor()};
      color: ${theme.tokens.colors.get(
        isActive ? 'textColor.inverted.primary' : 'textColor.default.active'
      )};
      border: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.interactive.default')};
      border-radius: ${theme.dimension.borderRadius.get('circle')};

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.label02'))};

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
