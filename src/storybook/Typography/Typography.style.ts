import { css, SerializedStyles } from '@emotion/react';

export const TypographyWrapper = () => (): SerializedStyles =>
  css`
    &:after {
      content: '';
      margin-top: 8px;
      background: #323338;
      height: 2px;
    }
    display: grid;
  `;
