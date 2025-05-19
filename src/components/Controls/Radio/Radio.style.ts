import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

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
        gap: ${theme.dimension.spacing.get('md')};

        position: relative;
        cursor: pointer;

        &:before {
          content: '';
          display: inline-block;
          width: ${theme.dimension.sizing.get('icon.md')};
          height: ${theme.dimension.sizing.get('icon.md')};
          box-sizing: border-box;
          border: ${theme.dimension.borderWidth.get('active')} solid
            ${theme.tokens.colors.get('borderColor.interactive.default')};
          border-radius: ${theme.dimension.borderRadius.get('circle')};
          transition: all 200ms;
          background: ${theme.tokens.colors.get('backgroundColor.transparent')};

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
            border-color: ${theme.tokens.colors.get('palette.primary.base')};
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
            width: ${theme.dimension.sizing.get('icon.xs')};
            height: ${theme.dimension.sizing.get('icon.xs')};
            background: ${theme.tokens.colors.get('palette.primary.base')};
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
