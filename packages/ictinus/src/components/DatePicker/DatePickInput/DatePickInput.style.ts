import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';
import { rem } from 'polished';
import type { Theme } from 'theme';

export const FIELD_TOKENS = {
  addOn: {
    height: { normal: vars.sizing['13'], compact: vars.sizing['7'] },
    padding: {
      normal: `${vars.spacing['0']} ${vars.spacing['5']} ${vars.spacing['0']} ${vars.spacing['4']}`,
      compact: `${vars.spacing['0']} ${vars.spacing['4']} ${vars.spacing['0']} ${vars.spacing['3']}`,
      textArea: `${vars.spacing['6']} ${vars.spacing['5']} ${vars.spacing['6']} ${vars.spacing['5']}`,
    },
  },
  container: { normal: vars.sizing['13'], compact: vars.sizing['7'] },
  minWidth: {
    small: { normal: '140px', compact: '70px' },
    large: { normal: '240px' },
    medium: { normal: '160px', compact: '90px' },
    extraLarge: { normal: '260px' },
  },
  content: {
    padding: `${vars.spacing['0']} ${vars.spacing['0']} ${vars.spacing['0']} ${vars.spacing['5']}`,
  },
};

export const iconStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      cursor: pointer;
      /** @TODO: revisit these styles when Interactive Icon is implemented */
      width: ${rem(36)};
      height: ${rem(36)};
      display: flex;
      align-items: center;
      justify-content: center;

      /** @TODO: revisit these styles when Interactive Icon is implemented */
      &:focus-visible,
      &:hover {
        background: ${theme.tokens.state.get('backgroundColor.hover')};
        border-radius: ${vars['border-radius']['7']};
      }
    `;
  };
