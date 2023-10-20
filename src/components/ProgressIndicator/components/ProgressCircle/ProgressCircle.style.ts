import { SerializedStyles, css } from '@emotion/react';
import { Theme } from 'theme';

export const animationStyles =
  (isIndeterminate?: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      transition: stroke-dashoffset 0.5s;

      ${isIndeterminate &&
      `
        @keyframes rotating {
          from {
            transform: rotate(0deg);
            transform-origin: center;
          }
          to {
            transform: rotate(360deg);
            transform-origin: center;
          }
        }
  
        animation: rotating 2s linear infinite;
      
      `}
    `;
