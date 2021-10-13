import { css, SerializedStyles } from '@emotion/react';

export const customContentStyle = (): SerializedStyles => css`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

export const tooltipContainerStyle = (): SerializedStyles => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

export const tooltipRowStyle = (): SerializedStyles => css`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 48px;
`;
