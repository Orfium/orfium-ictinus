import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import type { LabelConfig } from 'components/Controls/Controls.types';
import type { CheckBoxProps } from './CheckBox';

export const checkboxWrapperStyles =
  ({ sx, isDisabled }: Pick<LabelConfig, 'sx'> & Pick<CheckBoxProps, 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: fit-content;

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
    return css`
      display: block;
      cursor: pointer;
      position: relative;

      [data-role='checkbox-icon'] > div {
        transition: all 0.2s;
        width: ${theme.dimension.sizing.get('icon.md')};
        height: ${theme.dimension.sizing.get('icon.md')};
        align-items: center;
        box-sizing: border-box;

        border: ${theme.dimension.borderWidth.get('active')} solid
          ${theme.tokens.colors.get('borderColor.interactive.default')};
        border-radius: ${theme.dimension.borderRadius.get('md')};
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

          border-color: ${theme.tokens.colors.get('borderColor.decorative.transparent')};
          background: ${theme.tokens.colors.get('palette.primary.base')};
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
