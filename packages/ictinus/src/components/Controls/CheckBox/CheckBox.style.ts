import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import type { LabelConfig } from 'components/Controls/Controls.types';

export const checkboxWrapperStyles =
  ({ sx }: Pick<LabelConfig, 'sx'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: fit-content;

      [data-disabled] {
        opacity: ${theme.tokens.disabledState.get('default')};
        cursor: not-allowed;
      }

      ${sx};
    `;
  };

export const checkboxStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: block;
      cursor: pointer;
      position: relative;

      [data-role='checkbox-icon'] > div {
        transition: all 0.2s;
        width: ${vars.sizing['5']};
        height: ${vars.sizing['5']};
        align-items: center;
        box-sizing: border-box;

        border: ${vars['border-width']['2']} solid ${vars.color['border-color'].interactive.default};
        border-radius: ${vars['border-radius']['2']};
      }

      svg {
        visibility: hidden;
        opacity: 0;
      }

      &[data-hovered='true'],
      &[data-focus-visible='true'] {
        [data-role='checkbox-icon'] {
          transition: all 0.2s;
          background: ${theme.tokens.state.get('backgroundColor.hover')};
          box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
          border-radius: 100%;
        }
      }

      &[data-selected='true'],
      &[data-indeterminate='true'] {
        [data-role='checkbox-icon'] > div {
          transition: all 0.2s;

          border-color: ${vars.color['border-color'].decorative.transparent};
          background: ${vars.color.palette.primary.base};
        }

        svg {
          visibility: visible;
          opacity: 1;
          transition: all 0.2s;
        }
      }

      &[data-disabled='true'] {
        &:hover {
          background: none;
          box-shadow: none;
        }

        opacity: ${theme.tokens.disabledState.get('default')};
        cursor: not-allowed;
      }
    `;
  };
