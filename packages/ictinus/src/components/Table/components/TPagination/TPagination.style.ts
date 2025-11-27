import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import { ACTIONS_BAR_HEIGHT } from '../../constants';
import type { TPaginationProps } from './TPagination';

export const paginationContainer = ({
  isSticky,
}: Pick<TPaginationProps, 'isSticky'>): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${vars.color.background.default};
    height: ${rem(ACTIONS_BAR_HEIGHT)};
    width: 100%;
    padding: ${vars.spacing['4']} ${vars.spacing['6']};
    box-sizing: border-box;
    border-top: ${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default};
    border-bottom-left-radius: ${vars['border-radius']['2']};
    border-bottom-right-radius: ${vars['border-radius']['2']};

    ${isSticky &&
    `
        box-shadow: ${vars['box-shadow']['5']},
        0 ${vars['border-width']['1']}  0 0 ${vars.color['border-color'].decorative.default};
      `}
  `;
};

export const itemsPerPageContainer = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: ${vars.spacing['4']};
  `;
};

export const counterContainer = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: ${vars.spacing['9']};
  `;
};

export const counterWrapper = (): SerializedStyles => {
  return css`
    display: flex;
    gap: ${vars.spacing['3']};
  `;
};

export const buttonsContainer = (): SerializedStyles => {
  return css`
    display: flex;
  `;
};
