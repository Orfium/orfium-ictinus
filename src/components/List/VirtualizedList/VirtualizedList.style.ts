import { css, SerializedStyles } from '@emotion/core';

export const listStyle = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => (): SerializedStyles => css`
  height: ${height ? `${height}px` : '100%'};
  width: ${width ? `${width}px` : '100%'};
`;
