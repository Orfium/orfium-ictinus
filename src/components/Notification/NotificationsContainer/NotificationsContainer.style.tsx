import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from '../../../theme';

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

export const notificationsContainer = (currentPosition: string) => (
  theme: Theme
): SerializedStyles => css`
  position: fixed;
  ${getPositionStyle(positionOptions[currentPosition])};
  min-width: ${rem(490)};
  max-width: 66%;
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.md};
  > div {
    margin: ${theme.spacing.sm} 0;
  }

  div[notification-type='toast'] {
    width: 200px;
  }

  div[notification-type='snackbar'] {
    width: 200px;
  }

  div[notification-type='banner'] ~ div[notification-type='toast'] {
    width: 100%;
  }

  div[notification-type='banner'] ~ div[notification-type='snackbar'] {
    width: 100%;
  }
`;
