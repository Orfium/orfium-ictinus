import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import type { CSSObject } from '@emotion/react';
import { vars } from '@orfium/tokens';
import type { LabelConfig } from 'components/Controls/Controls.types';

const CONTROLS_HEIGHTS = {
  height: {
    track: vars.sizing['2'],
  },
  width: {
    track: vars.sizing['9'],
  },
};

export const switchWrapperStyles =
  ({ sx }: { sx?: CSSObject }) =>
  (theme: Theme): SerializedStyles => css`
    [data-disabled] {
      opacity: ${theme.tokens.disabledState.get('default')};
      cursor: not-allowed;
    }

    ${sx};
  `;

export const switchStyles =
  ({ placement = 'right' }: Pick<LabelConfig, 'placement'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      & > div > div:first-of-type {
        display: flex;
        flex-direction: ${placement === 'right' ? 'row' : 'row-reverse'};
        align-items: center;
        gap: ${vars.spacing['5']};
        position: relative;
      }
      cursor: pointer;

      .bar {
        width: ${CONTROLS_HEIGHTS.width.track};
        height: ${CONTROLS_HEIGHTS.height.track};
        background: ${vars.color.palette['primary-alt'].contrast};
        position: absolute;
        border-radius: ${vars['border-radius']['7']};
      }

      .indicator {
        width: ${CONTROLS_HEIGHTS.width.track};
        height: ${vars.sizing['5']};
        box-sizing: border-box;
        position: relative;

        &:before {
          content: '';
          box-sizing: border-box;
          display: block;
          width: ${vars.sizing['5']};
          height: ${vars.sizing['5']};
          background: ${vars.color.background.default};
          border: ${vars['border-width']['2']} solid
            ${vars.color['border-color'].interactive.default};
          border-radius: 100%;
          transition: all 200ms;
        }
      }

      &[data-hovered],
      &[data-focus-visible='true'] {
        .indicator {
          &:before {
            transition: all 0.2s;
            box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
            border-radius: 100%;
          }
        }
      }

      &[data-selected] {
        .indicator {
          &:before {
            transform: translateX(80%);
            background: ${vars.color.palette.primary.base};
            border-color: ${vars.color['border-color'].interactive.active};
          }
        }
      }
    `;
  };
