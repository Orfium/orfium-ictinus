import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import type { CheckBoxProps } from './CheckBox';
import { getControlsTokens } from 'components/Controls/Controls.tokens';
import type { LabelConfig } from 'components/Controls/Controls.types';

export const checkboxWrapperStyles =
  ({
    placement = 'right',
    sx,
    isDisabled,
  }: Pick<LabelConfig, 'placement' | 'sx'> & Pick<CheckBoxProps, 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      display: flex;
      flex-direction: ${placement === 'right' ? 'row' : 'row-reverse'};
      align-items: center;
      gap: ${tokens('checkbox.padding')};

      ${isDisabled &&
      `
        opacity: ${theme.tokens.disabledState.get('default')};
        cursor: not-allowed;
      `}

      ${sx};
    `;
  };

export const checkboxStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      display: block;
      cursor: pointer;
      position: relative;

      & > span:nth-of-type(2) {
        transition: all 0.2s;

        width: ${tokens('checkbox.size')};
        height: ${tokens('checkbox.size')};
        box-sizing: border-box;

        border: ${tokens('checkbox.borderWidth')} solid ${tokens('checkbox.borderColor.default')};
        border-radius: ${tokens('checkbox.borderRadius')};
      }

      svg {
        visibility: hidden;
        opacity: 0;
      }

      &:hover,
      &[data-focus-visible='true'] {
        transition: all 0.2s;
        background: ${theme.tokens.state.get('backgroundColor.hover')};
        box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
        border-radius: 100%;
      }

      &[data-selected='true'],
      &[data-indeterminate='true'] {
        & > span:last-child {
          transition: all 0.2s;

          border-color: ${tokens('checkbox.borderColor.pressed')};
          background: ${tokens('checkbox.backgroundColor.pressed')};
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
