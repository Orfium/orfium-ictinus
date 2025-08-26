import type { SerializedStyles} from '@emotion/react';
import { css } from '@emotion/react';

export const animationStyles = (isIndeterminate?: boolean) => (): SerializedStyles =>
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
