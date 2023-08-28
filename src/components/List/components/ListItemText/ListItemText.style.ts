import { SerializedStyles, css } from '@emotion/react';
import { Theme } from 'index';

import { getListItemsTokens } from 'components/List/List.tokens';

export const listItemTextWrapperStyles =
  (isGroupItem?: boolean, isHighlighted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getListItemsTokens(theme);

    return css`
      color: ${tokens('textColor.default')};
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
      }
    `;
  };
