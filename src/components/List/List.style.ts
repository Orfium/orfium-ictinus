import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const wrapperStyle =
  ({ width, isSearchable }: { width: number | undefined; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      border: ${isSearchable ? 'initial' : `1px solid ${theme.utils.getColor('lightGrey', 100)}`};
      border-radius: ${isSearchable ? 'initial' : theme.spacing.xsm};
      width: ${`${width}px` || '100%'};
    `;

export const listStyle =
  ({ width, height, isSearchable }: { width?: number; height?: number; isSearchable?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      border-radius: ${isSearchable ? 'initial' : theme.spacing.xsm};
      width: ${width ? rem(width) : '100%'};
      height: ${height ? rem(height) : '100%'};
      overflow: auto;
      overflow-x: hidden;
    `;

export const listLabelWithHelper: SerializedStyles = css`
  display: flex;
  flex-direction: column;
`;

export const listLabelHelperText = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['12']};
  font-weight: ${theme.typography.weights.regular};
  color: ${theme.utils.getColor('lightGrey', 650)};
`;
