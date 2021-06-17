import { css, SerializedStyles } from '@emotion/core';

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
  width: ${width ? `${width}px` : '100%'};
  height: ${height ? `${height}px` : '100%'};
  overflow: auto;
`;
