import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const wrapperStyle =
  ({ width, isSearchable }: { width: number | undefined; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      border: ${isSearchable ? 'initial' : `1px solid ${theme.utils.getColor('lightGrey', 100)}`};
      border-radius: ${isSearchable ? 'initial' : theme.globals.spacing.get('3')};
      width: ${`${width}px` || '100%'};
    `;

export const listStyle =
  ({ width, height, isSearchable }: { width?: number; height?: number; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      border-radius: ${isSearchable ? 'initial' : theme.globals.spacing.get('3')};
      width: ${width ? rem(width) : '100%'};
      height: ${height ? rem(height) : '100%'};
      overflow: auto;
      overflow-x: hidden;
    `;
