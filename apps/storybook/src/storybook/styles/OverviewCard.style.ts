import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const WrapperStyle = (): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  border: 1px solid #bdc7ff;
  border-radius: 4px;
  padding: 20px 15px;
  row-gap: 20px;
  column-gap: 64px;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  background: ${vars.color.background.default};
`;
