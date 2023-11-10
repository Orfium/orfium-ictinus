import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { getControlsTokens } from '../Controls.tokens';
import { LabelConfig } from '../Controls.types';

export const radioContainerStyles =
  ({
    placement = 'right',
    sx,
    isFocusVisible,
  }: Pick<LabelConfig, 'placement' | 'sx'> & { isFocusVisible?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      label {
        display: flex;
        flex-direction: ${placement === 'right' ? 'row' : 'row-reverse'};
        align-items: center;
        gap: ${tokens('radio.padding')};

        position: relative;
        cursor: pointer;

        &:before {
          content: '';
          display: inline-block;
          width: ${tokens('radio.size.ring')};
          height: ${tokens('radio.size.ring')};
          box-sizing: border-box;
          border: ${tokens('radio.borderWidth')} solid ${tokens('radio.borderColor.default')};
          border-radius: ${tokens('radio.borderRadius')};
          transition: all 200ms;
          background: ${tokens('radio.backgroundColor.default')};

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
            border-color: ${tokens('radio.borderColor.active')};
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
            width: ${tokens('radio.size.circle')};
            height: ${tokens('radio.size.circle')};
            background: ${tokens('radio.borderColor.active')};
            ${placement === 'right' ? 'left' : 'right'}: 4px;
            animation: circle 0.15s ease-in-out;
          }
        }

        &[data-disabled='true'] {
          opacity: ${theme.tokens.disabledState.get('default')};
          cursor: not-allowed;

          &:hover::before {
            background: none;
            box-shadow: none;
          }
        }

        ${sx};

        @keyframes circle {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    `;
  };
