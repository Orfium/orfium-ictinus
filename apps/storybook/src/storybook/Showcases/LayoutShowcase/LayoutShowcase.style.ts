import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

/** Examples */

export const examplesContainerStyle = () => css`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

/** Layout */

export const containerStyle = () => css`
  display: flex;
  height: 270px;
  width: 480px;
`;

export const siderStyle = () => css`
  background: ${vars.color.palette.upsell.contrast};
  min-width: 97px;
  max-width: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const mainContainerStyle = () => css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const headerFooterStyle = () => css`
  background: ${vars.color.palette.warning.base};
  min-height: 40px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const contentStyle = () => css`
  background: ${vars.color.palette.success.base};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** Grid */

export const gridContainerStyle = () => css`
  display: flex;
  height: 240px;
  gap: 32px;
  margin-bottom: 32px;
`;

export const gridStyle = (width: number) => css`
  background: ${vars.color.palette.secondary.base};
  color: ${vars.color.text.default.secondary};
  font-size: 28px;
  font-weight: bold;
  width: ${`${width}%`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
