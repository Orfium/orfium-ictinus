import { css, SerializedStyles } from '@emotion/core';

export const listStyle = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (): SerializedStyles => css`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  width: ${`${width}px`};
  height: ${`${height}px`};
  overflow: auto;
`;
