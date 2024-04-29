import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';
import { rem } from 'theme/utils';

import { tagColorToSemColor } from './constants';
import { getTagTokens } from './Tag.tokens';
import type { TagProps } from './Tag.types';
import type { Theme } from '../../theme';
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
        if (isSelected) return theme.tokens.colors.get('palette.secondary.muted');

        return theme.tokens.colors.get('palette.secondary.base');
      }

      return theme.tokens.colors.get(tagColorToSemColor[color].fill);
    };

    const typography: SemanticTypographyKey = size === 'normal' ? 'normal.label02' : 'normal.label03';

    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      height: ${tokens(`${size}.height` as const)};
      width: fit-content;
      box-sizing: border-box;
      gap: ${theme.dimension.spacing.get('xs')};

      padding: ${`${theme.dimension.spacing.get('2xs')}  ${theme.dimension.spacing.get(
        size === 'normal' ? 'sm' : 'xs'
      )}`};

      cursor: ${isSelectable ? 'pointer' : 'auto'};
      background: ${getBackgroundColor()};
      color: ${isInteractive
        ? theme.tokens.colors.get(tagColorToSemColor.blue.text)
        : theme.tokens.colors.get(tagColorToSemColor[color].text)};
      border: ${theme.dimension.borderWidth.get('default')} solid;

      border-color: ${isInteractive
        ? theme.tokens.colors.get('borderColor.interactive.default')
        : theme.tokens.colors.get(tagColorToSemColor[color].border)};

      border-radius: ${theme.dimension.borderRadius.get(size === 'normal' ? 'md' : 'sm')};

      &:hover {
        background: ${isSelectable ? theme.tokens.colors.get('palette.secondary.muted') : null};
      }

      &:focus-visible {
        background: ${isInteractive ? theme.tokens.colors.get('palette.secondary.muted') : null};
        border-color: ${isInteractive
          ? theme.tokens.colors.get('borderColor.interactive.active')
          : null};
      }

      ${generateStylesFromTokens(theme.tokens.typography.get(typography))}
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
