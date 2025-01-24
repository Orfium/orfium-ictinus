import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const wrapperStyle =
  ({ width, isSearchable }: { width: number | undefined; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      border: ${isSearchable
        ? 'initial'
        : `${theme.dimension.borderWidth.get('default')} solid ${theme.tokens.colors.get(
            'borderColor.decorative.default'
          )}`};
      border-radius: ${isSearchable ? 'initial' : theme.dimension.borderRadius.get('md')};
      width: ${`${width}px` || '100%'};
      box-shadow: ${theme.tokens.boxShadow.get('2')};
    `;
  };

export const listStyle =
  ({
    width,
    height,
    maxHeight,
    isSearchable,
  }: {
    width?: number;
    height?: number;
    maxHeight?: number;
    isSearchable?: boolean;
  }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      border-radius: ${isSearchable ? 'initial' : theme.dimension.borderRadius.get('md')};
      width: ${width ? rem(width) : '100%'};
      height: ${height ? rem(height) : 'auto'};
      max-height: ${maxHeight ? rem(maxHeight) : 'auto'};
      overflow: auto;
      overflow-x: hidden;
      background: ${theme.tokens.colors.get('backgroundColor.default')};
    `;
  };

export const groupedUlStyle = (): SerializedStyles => css`
  padding: 0;
  list-style: none;
`;
