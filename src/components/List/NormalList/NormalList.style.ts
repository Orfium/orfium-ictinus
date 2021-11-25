import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const listStyle = ({
  width,
  height,
  isSearchable,
}: {
  width?: number;
  height?: number;
  isSearchable?: boolean;
}) => (theme: Theme): SerializedStyles => css`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: ${isSearchable ? 'initial' : theme.spacing.xsm};
  width: ${width ? rem(width) : '100%'};
  height: ${height ? rem(height) : '100%'};
  overflow: auto;
  overflow-x: hidden;
`;
