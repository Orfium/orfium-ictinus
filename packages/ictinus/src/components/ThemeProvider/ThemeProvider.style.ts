import { css } from '@emotion/react';

// TODO: View transitions used by toast remove when toast is migrated to vanilla extract
export const globalStyles = () => css`
  ::view-transition-group(*) {
    animation-duration: 250ms;
    /* swift out */
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  ::view-transition-new(.toast):only-child {
    animation-name: fade-in-up;
  }

  ::view-transition-old(.toast):only-child {
    animation-name: fade-out;
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
  }
`;
