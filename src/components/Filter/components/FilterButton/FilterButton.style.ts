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
        return tokens('backgroundColor.active');
      }

      if (isPopulated) {
        if (hasHover) return tokens('backgroundColor.populatedHovered');

        return tokens('backgroundColor.populated');
      }

      if (hasHover) return tokens('backgroundColor.hover');

      return tokens('backgroundColor.default');
    };

    return css`
      display: flex;
      align-items: center;

      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

      height: ${tokens('height')};
      padding: 0 ${tokens('horizontalPadding')};

      max-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].maxWidth)};

      gap: ${tokens('addedPadding')};

      background-color: ${getBackgroundColor()};
      color: ${tokens(isActive ? 'textColor.active' : 'textColor.default')};
      border: ${tokens('borderWidth.1')} solid ${tokens('borderColor.default')};
      border-radius: ${tokens('borderRadius')};

      ${generateStylesFromTokens(tokens('text'))};

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
