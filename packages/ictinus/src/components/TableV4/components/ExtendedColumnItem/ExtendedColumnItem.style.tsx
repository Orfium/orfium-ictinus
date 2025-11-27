import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { flexCenterVertical } from 'theme/functions';

export const containerStyles = (gap: string) => (): SerializedStyles => css`
  ${flexCenterVertical};
  display: inline-flex;
  gap: ${rem(`${gap}px`)};
`;

export const contentStyles = (): SerializedStyles => css`
  font-weight: ${vars.weight.medium};
  color: ${vars.color.text.default.secondary};
`;
