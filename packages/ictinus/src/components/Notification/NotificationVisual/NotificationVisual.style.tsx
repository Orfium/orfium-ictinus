import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const visualContainer = (): SerializedStyles => css`
  padding: ${vars.spacing['6']};
`;

export const descriptionContainer = (): SerializedStyles => css`
  padding-top: ${vars.spacing['4']};
  max-height: ${rem(180)};
  overflow: auto;
  width: ${rem(547)};
`;
