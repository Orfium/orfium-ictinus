import { css, SerializedStyles } from '@emotion/react';

export const WrapperStyle = (): SerializedStyles => css`
  margin: 5px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #323338;
`;
export const iconStyle = (): SerializedStyles => css`
  margin-right: 10px;
  display: flex;
  align-self: flex-start;
`;
