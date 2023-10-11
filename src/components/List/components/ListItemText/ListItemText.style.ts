import { SerializedStyles, css } from '@emotion/react';
import { Theme } from 'index';

import { getListItemTokens } from 'components/List/List.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const listItemTextWrapperStyles =
  (isGroupItem?: boolean, isHighlighted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getListItemTokens(theme);

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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
  };

export const descriptionStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getListItemTokens(theme);

    return css`
      ${generateStylesFromTokens(tokens('secondaryText'))};
      color: ${tokens('textColor.secondary')};
    `;
  };
