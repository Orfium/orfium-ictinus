import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { getTagTokens } from './Tag.tokens';
import { TagProps } from './Tag.types';
import { Theme } from '../../theme';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const tagContainerStyles =
  ({
    size = 'normal',
    color = 'blue',
    isSelectable,
    isClearable,
    isSelected,
  }: Pick<TagProps, 'size' | 'color' | 'isSelected'> & {
    isSelectable?: boolean;
    isClearable?: boolean;
  }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTagTokens(theme);

    const isInteractive = isSelectable || isClearable;

    const getBackgroundColor = () => {
      if (isInteractive) {
        if (isSelected) return tokens('backgroundColor.interactive.focused');

        return tokens('backgroundColor.interactive.default');
      }

      return tokens(`backgroundColor.readOnly.${color}` as const);
    };

    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      height: ${tokens(`${size}.height` as const)};
      width: fit-content;
      box-sizing: border-box;
      gap: ${tokens('paddingContent')};

      padding: ${`${tokens(`${size}.paddingVertical` as const)}  ${tokens(
        `${size}.paddingHorizontal` as const
      )}`};

      cursor: ${isSelectable ? 'pointer' : 'auto'};
      background: ${getBackgroundColor()};
      color: ${isInteractive ? tokens('textColor.blue') : tokens(`textColor.${color}` as const)};
      border: ${tokens('borderWidth')} solid;

      border-color: ${isInteractive
        ? tokens('borderColor.interactive.default')
        : tokens(`borderColor.readOnly.${color}` as const)};

      border-radius: ${tokens(`borderRadius.${size}` as const)};

      &:hover {
        background: ${isSelectable ? tokens('backgroundColor.interactive.focused') : null};
      }

      &:focus-visible {
        background: ${isInteractive ? tokens('backgroundColor.interactive.focused') : null};
        border-color: ${isInteractive ? tokens('borderColor.interactive.focused') : null};
      }

      ${generateStylesFromTokens(tokens(`label.${size}` as const))}
    `;
  };

export const iconStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      /** @TODO: revisit all these styles when Interactive Icon is implemented */
      width: ${rem(16)};
      height: ${rem(16)};
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      &:hover {
        background: ${theme.tokens.state.get('backgroundColor.hover')};
        border-radius: ${theme.globals.borderRadius.get('7')};
      }
    `;
  };
