import { css, type SerializedStyles } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { Theme } from 'theme';
import { getSearchTokens } from './Search.tokens';
import type { SearchProps } from './Search.types';

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
          color: ${vars.color.text.default.secondary};
        }

        ::-webkit-search-cancel-button {
          appearance: none;
        }
      }
    `;
  };

export const filterStyles = (): SerializedStyles => {
  return css`
    /* TODO: avoid abstract overrides since the structure might change */
    > div > button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border: none;
      box-shadow: ${`inset 0 0 0 ${vars['border-width']['1']} ${vars.color['border-color'].interactive.default}`};
      position: relative;
      z-index: 0;

      &:hover[data-active='false']:enabled {
        background: ${vars.color.palette.tertiary.muted};
      }

      &:focus-within:enabled {
        border-left: none;
        box-shadow: ${`inset 0 0 0 ${vars['border-width']['2']} ${vars.color['border-color'].interactive.active}`};
        z-index: 1;

        &[data-active='false'] {
          background: ${vars.color.palette.tertiary.muted};
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
          ? `${vars['border-radius']['7']} 0 0 ${vars['border-radius']['7']}`
          : vars['border-radius']['7'],
        background: vars.color.background.default,
        boxShadow: `inset 0 0 0 ${vars['border-width']['1']} ${vars.color['border-color'].interactive.default}`,
        ...(!isDisabled && {
          '&:hover': {
            background: vars.color.palette.tertiary.muted,
          },
          '&:focus-within': {
            background: vars.color.palette.tertiary.muted,
            outline: 'none',
            boxShadow: `inset 0 0 0 ${vars['border-width']['2']} ${vars.color['border-color'].interactive.active}`,
          },
        }),
        ...sx?.wrapper,
      },
      textField: {
        gap: rem(8),
        paddingRight: vars.spacing['6'],
        paddingLeft: vars.spacing['6'],
        ...sx?.textField,
      },
    };
  };
