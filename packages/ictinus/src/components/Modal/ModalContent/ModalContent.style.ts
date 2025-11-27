import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const modalContentContainer = (): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  color: ${vars.color.text.default.primary};
  font-weight: ${vars.weight.regular};
`;

export const labelContainer = (): SerializedStyles => css`
  font-size: ${vars['font-size']['3']};
  margin: 0 0 ${vars.spacing['3']} 0;
`;

export const headingContainer = (): SerializedStyles => css`
  font-size: ${vars['font-size']['9']};
  color: ${vars.color.text.default.primary};
  font-weight: ${vars.weight.medium};
  margin: 0 0 ${vars.spacing['9']} 0;
`;

export const messageContainer = (): SerializedStyles => css`
  font-size: ${vars['font-size']['4']};
  color: ${vars.color.text.default.secondary};
  max-height: ${rem(430)};
  overflow-y: hidden;
  margin: 0;
`;

export const actionsContainer = (): SerializedStyles => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin: ${vars.spacing['9']} 0 0 0;

  button {
    margin-left: ${vars.spacing['6']};
  }
`;
