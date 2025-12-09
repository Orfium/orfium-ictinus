import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { ACTIONS_BAR_HEIGHT } from '../../constants';

import { rem, vars } from '@orfium/tokens';

export const tTitleContainer = (): SerializedStyles => {
  return css`
    padding: ${vars.spacing['4']} ${vars.spacing['6']};
    border-bottom: ${vars['border-width']['1']} solid
      ${vars.color['border-color'].decorative.default};
    display: flex;
    justify-content: space-between;
    height: ${rem(ACTIONS_BAR_HEIGHT)};
    box-sizing: border-box;
  `;
};

export const titleContent = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: ${vars.spacing['6']};
  `;
};

export const actionsContent = (): SerializedStyles => {
  return css`
    display: flex;
    gap: ${vars.spacing['6']};
  `;
};
