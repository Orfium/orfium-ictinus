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
      gap: ${tokens('switch.padding')};
      position: relative;
      cursor: pointer;

      .bar {
        width: ${tokens('switch.width.track')};
        height: ${tokens('switch.height.track')};
        background: ${tokens('switch.backgroundColor.track')};
        position: absolute;
        border-radius: ${tokens('switch.borderRadius')};
      }

      .indicator {
        width: ${tokens('switch.width.track')};
        height: ${tokens('switch.size.thumb')};
        box-sizing: border-box;
        position: relative;

        &:before {
          content: '';
          box-sizing: border-box;
          display: block;
          width: ${tokens('switch.size.thumb')};
          height: ${tokens('switch.size.thumb')};
          background: ${tokens('switch.backgroundColor.thumb.default')};
          border: ${tokens('switch.borderWidth')} solid
            ${tokens('switch.borderColor.thumb.default')};
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
            background: ${tokens('switch.backgroundColor.thumb.active')};
            border-color: ${tokens('switch.borderColor.thumb.active')};
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
