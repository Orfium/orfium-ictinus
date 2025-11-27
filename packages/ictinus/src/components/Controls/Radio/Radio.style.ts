import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import type { LabelConfig } from '../Controls.types';

export const radioContainerStyles =
  ({
    placement = 'right',
    sx,
    isFocusVisible,
  }: Pick<LabelConfig, 'placement' | 'sx'> & { isFocusVisible?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      label {
        display: flex;
        flex-direction: ${placement === 'right' ? 'row' : 'row-reverse'};
        align-items: center;
        justify-content: ${placement === 'left' ? 'space-between' : 'unset'};
        gap: ${vars.spacing['5']};

        position: relative;
        cursor: pointer;

        &:before {
          content: '';
          display: inline-block;
          width: ${vars.sizing['5']};
          height: ${vars.sizing['5']};
          box-sizing: border-box;
          border: ${vars['border-width']['2']} solid
            ${vars.color['border-color'].interactive.default};
          border-radius: ${vars['border-radius']['7']};
          transition: all 200ms;
          background: ${vars.color.transparent['1']};

          ${isFocusVisible &&
          `
            background: ${theme.tokens.state.get('backgroundColor.hover')};
            box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
          `}
        }

        &:hover::before {
          background: ${theme.tokens.state.get('backgroundColor.hover')};
          box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
        }

        &[data-selected='true'] {
          &:before {
            border-color: ${vars.color.palette.primary.base};
            border-radius: 50%;
          }

          &:hover::before {
            background: none;
            box-shadow: none;
          }

          &:after {
            content: '';
            display: block;
            position: absolute;
            border-radius: 50%;
            width: ${vars.sizing['3']};
            height: ${vars.sizing['3']};
            background: ${vars.color.palette.primary.base};
            ${placement === 'right' ? 'left' : 'right'}: 4px;
            animation: circle 0.15s ease-in-out;
          }
        }

        @keyframes circle {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      }

      [data-disabled='true'] {
        opacity: ${theme.tokens.disabledState.get('default')};
        cursor: not-allowed;

        &:hover::before {
          background: none;
          box-shadow: none;
        }
      }

      ${sx};
    `;
  };
