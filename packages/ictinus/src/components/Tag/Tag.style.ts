import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { SemanticTypographyKey } from '@orfium/tokens';
import { rem, vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import { lineEllipsis } from 'theme/functions';
import type { Theme } from '../../theme';
import { tagColorToSemColor } from './constants';
import { getTagTokens } from './Tag.tokens';
import type { TagProps } from './Tag.types';

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
        if (isSelected) return vars.color.palette.secondary.muted;

        return vars.color.palette.secondary.base;
      }

      return theme.tokens.colors.get(tagColorToSemColor[color].fill);
    };

    const typography: SemanticTypographyKey =
      size === 'normal' ? 'normal.label02' : 'normal.label03';

    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      height: ${tokens(`${size}.height` as const)};
      width: fit-content;
      box-sizing: border-box;
      gap: ${vars.spacing['3']};

      padding: ${`${vars.spacing['2']}  ${vars.spacing[size === 'normal' ? '4' : '3']}`};

      cursor: ${isSelectable ? 'pointer' : 'auto'};
      background: ${getBackgroundColor()};
      color: ${isInteractive
        ? theme.tokens.colors.get(tagColorToSemColor.blue.text)
        : theme.tokens.colors.get(tagColorToSemColor[color].text)};
      border: ${vars['border-width']['1']} solid;

      border-color: ${isInteractive
        ? vars.color['border-color'].interactive.default
        : theme.tokens.colors.get(tagColorToSemColor[color].border)};

      border-radius: ${vars['border-radius'][size === 'normal' ? '2' : '1']};

      &:hover {
        background: ${isSelectable ? vars.color.palette.secondary.muted : null};
      }

      &:focus-visible {
        background: ${isInteractive ? vars.color.palette.secondary.muted : null};
        border-color: ${isInteractive ? vars.color['border-color'].interactive.active : null};
      }

      ${generateStylesFromTokens(theme.tokens.typography.get(typography))}

      ${lineEllipsis};
    `;
  };

export const code = (size: 'normal' | 'small') => (theme: Theme) => css`
  ${theme.tokens.typography.get(size === 'normal' ? 'mono.body02' : 'mono.body03')};
  background-color: ${vars.color.palette.secondary.contrast};
  border-color: transparent;
  color: ${vars.color.text.default.primary};
`;

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
        border-radius: ${vars['border-radius']['7']};
      }
    `;
  };
