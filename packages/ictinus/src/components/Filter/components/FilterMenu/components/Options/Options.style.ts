import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { FILTER_WIDTH } from 'components/Filter/constants';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { Theme } from 'theme';
import { flexCenter } from 'theme/functions';

const LIST_ITEM_TOKENS = {
  height: vars.sizing['13'],
  heightCompact: vars.sizing['10'],
};

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
  return css`
    color: ${vars.color.text.default.secondary};
    height: ${LIST_ITEM_TOKENS.height};
    padding: 0 ${vars.spacing['5']};
    background: ${vars.color.background.default};

    ${flexCenter};

    ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
  `;
};
