import { css, SerializedStyles } from '@emotion/react';

export const typeWrapperStyle = () => (): SerializedStyles =>
  css`
    margin: 15px 0;
    display: flex;
    flex-direction: column;
  `;
export const stateWrapperStyle = () => (): SerializedStyles =>
  css`
    display: flex;
    padding: 15px 0;
  `;
export const colorStyle = (): SerializedStyles =>
  css`
    width: 80px;
    height: 80px;
    margin: 0 15px;
  `;
