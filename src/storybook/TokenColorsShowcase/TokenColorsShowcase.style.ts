import { css, SerializedStyles } from '@emotion/react';

export const typeWrapperStyle = () => (): SerializedStyles =>
  css`
    margin: 35px 0;
    display: flex;
    flex-direction: column;
  `;
export const stateWrapperStyle = () => (): SerializedStyles =>
  css`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    justify-items: center;
    text-align: -webkit-center;
  `;
export const colorStyle = (): SerializedStyles =>
  css`
    width: 100%;
    height: 50px;
    margin: 10px 0;
  `;
