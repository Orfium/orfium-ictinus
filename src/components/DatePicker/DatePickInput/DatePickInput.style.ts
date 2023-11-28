import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

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
        border-radius: ${theme.globals.borderRadius.get('7')};
      }
    `;
  };
