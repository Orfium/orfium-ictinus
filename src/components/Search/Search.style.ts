import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getSearchTokens } from './Search.tokens';
import type { SearchProps } from './Search.types';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const searchContainer = (): SerializedStyles => {
  return css`
    display: flex;
  `;
};

export const searchInputStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: 100%;
      input {
        ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

        &::placeholder {
          color: ${theme.tokens.colors.get('textColor.default.secondary')};
        }

        ::-webkit-search-cancel-button {
          appearance: none;
        }
      }
    `;
  };

export const filterStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      > div > div > button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: none;
        box-shadow: ${`inset 0 0 0 ${theme.dimension.borderWidth.get(
          'default'
        )} ${theme.tokens.colors.get('borderColor.interactive.default')}`};
        position: relative;
        z-index: 0;

        &:hover[data-active='false']:enabled {
          background: ${theme.tokens.colors.get('palette.tertiary.muted')};
        }

        &:focus-within:enabled {
          border-left: none;
          box-shadow: ${`inset 0 0 0 ${theme.dimension.borderWidth.get(
            'active'
          )} ${theme.tokens.colors.get('borderColor.interactive.active')}`};
          z-index: 1;

          &[data-active='false'] {
            background: ${theme.tokens.colors.get('palette.tertiary.muted')};
          }
        }

        margin-left: -1px;
      }
    `;
  };

export const getSX =
  ({
    hasFilter,
    isDisabled,
    sx,
  }: { hasFilter: boolean } & Pick<SearchProps, 'isDisabled' | 'sx'>) =>
  (theme: Theme) => {
    const tokens = getSearchTokens(theme);

    return {
      wrapper: {
        height: tokens('height.normal'),
        ...(hasFilter && { minWidth: rem(240) }),
        zIndex: 1,
        borderRadius: hasFilter
          ? `${theme.dimension.borderRadius.get('circle')} 0 0 ${theme.dimension.borderRadius.get(
              'circle'
            )}`
          : theme.dimension.borderRadius.get('circle'),
        background: theme.tokens.colors.get('backgroundColor.default'),
        boxShadow: `inset 0 0 0 ${theme.dimension.borderWidth.get(
          'default'
        )} ${theme.tokens.colors.get('borderColor.interactive.default')}`,
        ...(!isDisabled && {
          '&:hover': {
            background: theme.tokens.colors.get('palette.tertiary.muted'),
          },
          '&:focus-within': {
            background: theme.tokens.colors.get('palette.tertiary.muted'),
            outline: 'none',
            boxShadow: `inset 0 0 0 ${theme.dimension.borderWidth.get(
              'active'
            )} ${theme.tokens.colors.get('borderColor.interactive.active')}`,
          },
        }),
        ...sx?.wrapper,
      },
      textField: {
        gap: rem(8),
        paddingRight: theme.dimension.spacing.get('lg'),
        paddingLeft: theme.dimension.spacing.get('lg'),
        ...sx?.textField,
      },
    };
  };
