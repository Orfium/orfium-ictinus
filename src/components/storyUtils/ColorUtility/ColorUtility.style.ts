import { css } from '@emotion/react';

import { flexCenter } from '../../../theme/functions';

export const container = css`
  ${flexCenter};
  flex-direction: row;
`;

export const inputWrapper = css`
  width: 250px;
`;

export const colorWrapper = (color: string) => css`
  background: ${color};
  width: 400px;
  height: 50px;
  border: 1px solid gray;
  margin-top: 20px;
  border-radius: 4px;
  ${flexCenter};
  flex-direction: column;
`;

export const contentWrapper = css`
  background: white;
  opacity: 0.6;
  border-radius: 4px;
  padding: 4px;
`;
