import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getListTokens } from './List.tokens';

export const wrapperStyle =
  ({ width, isSearchable }: { width: number | undefined; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getListTokens(theme);

    return css`
      border: ${isSearchable
        ? 'initial'
        : `${tokens('borderWidth')} solid ${tokens('borderColor')}`};
      border-radius: ${isSearchable ? 'initial' : tokens('borderRadius')};
      width: ${`${width}px` || '100%'};
      box-shadow: ${tokens('boxShadow')};
    `;
  };

export const listStyle =
  ({ width, height, isSearchable }: { width?: number; height?: number; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getListTokens(theme);

    return css`
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      border-radius: ${isSearchable ? 'initial' : tokens('borderRadius')};
      width: ${width ? rem(width) : '100%'};
      height: ${height ? rem(height) : 'auto'};
      overflow: auto;
      overflow-x: hidden;
      background: ${tokens('backgroundColor')};
    `;
  };

export const groupedUlStyle = (): SerializedStyles => css`
  padding: 0;
  list-style: none;
`;
