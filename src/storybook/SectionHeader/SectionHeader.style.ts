import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export const sectionHeaderWrapper = () => (): SerializedStyles =>
  css`
    width: auto;
    height: 128px;
    background-image: url('./assets/header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    align-items: center;
    padding: 0 32px;
  `;
