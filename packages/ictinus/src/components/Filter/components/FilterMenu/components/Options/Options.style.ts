import { css } from '@emotion/react';
import { FILTER_WIDTH } from 'components/Filter/constants';
import { getListItemTokens } from 'components/List/List.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { Theme } from 'theme';
import { flexCenter } from '@orfium/tokens';
import { rem } from '@orfium/tokens';

export const optionsStyles =
  ({ isMulti }) =>
  () => css`
    max-height: ${rem(FILTER_WIDTH.maxHeight)};

    & > div,
    ul {
      border: none;
      border-radius: 0;
    }

    & > div {
      max-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].maxWidth)};
    }
  `;

export const emptyStyle = () => (theme: Theme) => {
  const tokens = getListItemTokens(theme);

  return css`
    color: ${theme.tokens.colors.get('textColor.default.secondary')};
    height: ${tokens('height')};
    padding: 0 ${theme.dimension.spacing.get('md')};

    ${flexCenter};

    ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
  `;
};
