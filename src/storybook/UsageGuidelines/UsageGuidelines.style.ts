import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export const WrapperStyle = (): SerializedStyles => css`
  margin: 15px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #323338;
`;
export const iconStyle = (): SerializedStyles => css`
  font-size: 15px;
  margin-right: 10px;
  display: flex;
  align-self: flex-start;
`;
