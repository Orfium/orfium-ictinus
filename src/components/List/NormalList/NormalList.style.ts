import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

export const listStyle = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => (): SerializedStyles => css`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  width: ${width ? rem(width) : '100%'};
  height: ${height ? rem(height) : '100%'};
  overflow: auto;
`;
