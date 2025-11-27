import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';
import { rem } from 'polished';

export const container = (): SerializedStyles => css`
  display: flex;
  gap: ${vars.spacing['9']};
  flex-wrap: wrap;
  row-gap: ${rem(48)};
  margin-bottom: ${rem(48)};
  height: ${rem(350)};
`;

export const wrapper = (): SerializedStyles => css`
  width: 45%;
`;
