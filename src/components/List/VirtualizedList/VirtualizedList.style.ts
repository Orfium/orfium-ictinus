import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

export const listStyle = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => (): SerializedStyles => css`
  height: ${height ? rem(height) : '100%'};
  width: ${width ? rem(width) : '100%'};
`;
