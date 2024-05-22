import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'index';

import { generateStylesFromTokens } from 'components/Typography/utils';

export const listItemTextWrapperStyles =
  (isGroupItem?: boolean, isHighlighted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    return css`
      color: ${theme.tokens.colors.get('textColor.default.primary')};
      font-weight: ${isGroupItem || isHighlighted ? 'bold' : 'initial'};

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: inherit;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      strong {
        font-weight: bold;
      }

      span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
  };

export const descriptionStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body03'))};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
    `;
  };
