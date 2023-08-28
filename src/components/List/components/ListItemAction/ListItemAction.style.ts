import { css, SerializedStyles } from '@emotion/react';

export const listItemActionWrapper = () => (): SerializedStyles =>
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
