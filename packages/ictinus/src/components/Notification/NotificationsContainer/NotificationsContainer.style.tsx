import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

const getPositionStyle = (styleLiteral: string) => {
  return css`
    ${styleLiteral}
  `;
};

const positionOptions = {
  'top-right': `top:0; right: 0; align-items: flex-end;`,
  'top-left': `top:0; left: 0; align-items: flex-start;`,
  'bottom-left': `bottom:0; left: 0; align-items: flex-start;`,
  'bottom-right': `bottom:0; right: 0; align-items: flex-end;`,
};

export const notificationsContainer = (
  currentPosition: string,
  parent: HTMLElement
): SerializedStyles => css`
  position: ${parent === document.body ? 'fixed' : 'absolute'};
  ${getPositionStyle(positionOptions[currentPosition])};
  max-width: 66%;
  display: flex;
  flex-direction: column;
  z-index: 2500;
  margin: ${vars.spacing['4']} ${vars.spacing['6']} ${vars.spacing['6']};
  > div {
    margin: ${vars.spacing['4']} 0;
  }

  div[notification-type='toast'] {
    min-width: ${rem(336)};
    width: 100%;
  }

  div[notification-type='snackbar'] {
    min-width: ${rem(336)};
    width: 100%;
  }

  div[notification-type='banner'] {
    min-width: ${rem(490)};
  }

  div[notification-type='banner'] ~ div[notification-type='toast'] {
    width: 100%;
  }

  div[notification-type='banner'] ~ div[notification-type='snackbar'] {
    width: 100%;
  }
`;
