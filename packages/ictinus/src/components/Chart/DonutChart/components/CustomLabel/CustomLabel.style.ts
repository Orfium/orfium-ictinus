import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const flexContainer = () => (): SerializedStyles => css`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const labelUnitStyle = (): SerializedStyles => css`
  width: 80%;
  font-size: ${vars['font-size']['2']};
  color: ${vars.color.text.default.secondary};
  text-align: center;
`;
