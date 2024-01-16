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
    const tokens = getSearchTokens(theme);

    return css`
      width: 100%;
      input {
        ${generateStylesFromTokens(tokens('text'))};

        &::placeholder {
          color: ${tokens('textColor.default')};
        }
      }
    `;
  };

export const filterStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getSearchTokens(theme);

    return css`
      button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: none;
        box-shadow: ${`inset 0 0 0 ${tokens('borderWidth.1')} ${tokens('borderColor.default')}`};
        position: relative;
        z-index: 0;

        &:hover[data-active="false"]:enabled {
          background: ${tokens('backgroundColor.focused')};
        }

        &:focus-within:enabled {
          border-left: none;
          box-shadow: ${`inset 0 0 0 ${tokens('borderWidth.2')} ${tokens('borderColor.active')}`};
          z-index: 1;

          &[data-active='false'] {
            background: ${tokens('backgroundColor.focused')};
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
        height: 'unset',
        ...(hasFilter && { minWidth: rem(240) }),
        zIndex: 1,
        borderRadius: hasFilter
          ? `${tokens('borderRadius.rounded')} 0 0 ${tokens('borderRadius.rounded')}`
          : tokens('borderRadius.rounded'),
        background: tokens('backgroundColor.default'),
        boxShadow: `inset 0 0 0 ${tokens('borderWidth.1')} ${tokens('borderColor.default')}`,
        ...(!isDisabled && {
          '&:hover': {
            background: tokens('backgroundColor.focused'),
          },
          '&:focus-within': {
            background: tokens('backgroundColor.focused'),
            outline: 'none',
            boxShadow: `inset 0 0 0 ${tokens('borderWidth.2')} ${tokens('borderColor.active')}`,
          },
        }),
        ...sx?.wrapper,
      },
      textField: {
        gap: rem(8),
        padding: `${tokens('paddingVertical')} ${tokens('paddingHorizontalRounded')}`,
        ...sx?.textField,
      },
    };
  };
