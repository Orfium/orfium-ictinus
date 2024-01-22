import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { flexCenter } from 'theme/functions';
import { rem } from 'theme/utils';

import { FILTER_WIDTH } from 'components/Filter/constants';
import { getListItemTokens } from 'components/List/List.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const optionsStyles =
  ({ isMulti }) =>
  () =>
    css`
      & > div,
      ul {
        border: none;
        border-radius: 0;
      }

      & > div {
        max-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].maxWidth)};
      }

      ul {
        max-height: ${rem(FILTER_WIDTH.maxHeight)};
      }
    `;

export const emptyStyle = () => (theme: Theme) => {
  const tokens = getListItemTokens(theme);

  return css`
    color: ${tokens('textColor.secondary')};
    height: ${tokens('height')};
    padding: 0 ${tokens('paddingHorizontal')};

    ${flexCenter};

    ${generateStylesFromTokens(tokens('default'))};
  `;
};
