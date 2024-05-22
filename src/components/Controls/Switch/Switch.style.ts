import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { getControlsTokens } from 'components/Controls/Controls.tokens';
import type { LabelConfig } from 'components/Controls/Controls.types';

export const switchStyles =
  ({ placement = 'right', sx }: Pick<LabelConfig, 'placement' | 'sx'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      display: flex;
      flex-direction: ${placement === 'right' ? 'row' : 'row-reverse'};
      align-items: center;
      gap: ${theme.dimension.spacing.get('md')};
      position: relative;
      cursor: pointer;

      .bar {
        width: ${tokens('switch.width.track')};
        height: ${tokens('switch.height.track')};
        background: ${theme.tokens.colors.get('palette.primaryAlt.contrast')};
        position: absolute;
        border-radius: ${theme.dimension.borderRadius.get('circle')};
      }

      .indicator {
        width: ${tokens('switch.width.track')};
        height: ${theme.dimension.sizing.get('icon.md')};
        box-sizing: border-box;
        position: relative;

        &:before {
          content: '';
          box-sizing: border-box;
          display: block;
          width: ${theme.dimension.sizing.get('icon.md')};
          height: ${theme.dimension.sizing.get('icon.md')};
          background: ${theme.tokens.colors.get('backgroundColor.default')};
          border: ${theme.dimension.borderWidth.get('active')} solid
            ${theme.tokens.colors.get('borderColor.interactive.default')};
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
            background: ${theme.tokens.colors.get('palette.primary.base')};
            border-color: ${theme.tokens.colors.get('borderColor.interactive.active')};
          }
        }
      }

      &[data-disabled] {
        opacity: ${theme.tokens.disabledState.get('default')};
        cursor: not-allowed;
      }

      ${sx};
    `;
  };
