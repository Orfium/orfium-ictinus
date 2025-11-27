import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const tickStyle = (fill: string) => (): SerializedStyles => css`
  width: inherit;
  height: inherit;
  color: ${fill};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const tooltipStyle = (): SerializedStyles => css`
  display: block;
  position: fixed;
  top: -33%;
  left: 106%;
  color: ${vars.color.neutral['1']};
  background-color: ${vars.color.background.inverted};
  opacity: 90%;
  border-radius: ${vars.spacing['3']};
  padding: ${vars.spacing['4']};
`;

export const tooltipArrowStyle = (): SerializedStyles => css`
  content: '';
  position: absolute;
  border-style: solid;
  margin-top: ${rem(-5)};
  border-width: ${rem(5)};
  border-color: transparent ${vars.color.background.inverted} transparent transparent;
  top: 50%;
  left: 100%;
  opacity: 90%;
`;
