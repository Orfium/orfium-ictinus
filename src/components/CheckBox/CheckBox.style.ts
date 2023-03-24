import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { CheckboxProps } from './CheckBox';
import { Theme } from '../../theme';
import { BASE_SHADE } from '../../theme/palette';

export const wrapperStyle =
  ({ isDisabled }: CheckboxProps) =>
  (): SerializedStyles =>
    css`
      opacity: ${isDisabled ? 0.3 : 1};
      justify-content: center;
      align-items: center;
      display: flex;
    `;

export const checkboxWrapperStyle =
  ({ isDisabled }: CheckboxProps) =>
  (): SerializedStyles => {
    const hoverStyle =
      !isDisabled &&
      `&:hover {
    &:before {
      display: block;
      background: rgba(0, 0, 0, 0.05);
    }
  }`;

    return css`
      border-radius: 100%;
      display: flex;
      width: ${rem(48)};
      height: ${rem(48)};
      justify-content: center;
      align-items: center;
      position: relative;

      &:before {
        display: none;
        border-radius: 100%;
        transition: all 0.2s;
        content: ' ';
        width: ${rem(48)};
        height: ${rem(48)};
        position: absolute;
      }

      ${hoverStyle}
    `;
  };

const getBackgroundColor = ({ isChecked, isFilled, theme }: CheckboxProps & { theme: Theme }) => {
  if (isChecked) {
    return `background: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')}`;
  }

  if (isFilled) {
    return `background: ${theme.utils.getColor('lightGrey', 300)}`;
  }

  return `background: inherit; box-shadow: inset 0px 0px 0px ${rem('2px')} ${theme.utils.getColor(
    'lightGrey',
    300
  )};`;
};

export const checkboxStyle =
  ({ isChecked, isFilled }: CheckboxProps) =>
  (theme: Theme): SerializedStyles => {
    return css`
      border: 0;
      border-radius: ${rem(2)};
      width: ${rem(24)};
      height: ${rem(24)};

      position: absolute;
      opacity: 0; // hide it

      & + label {
        position: relative;
        cursor: pointer;
        padding: 0;
      }

      // Box.
      & + label:before {
        content: '';
        transition: all 0.2s;
        display: inline-block;
        vertical-align: text-top;
        width: ${rem(24)};
        height: ${rem(24)};
        ${getBackgroundColor({ isChecked, isFilled, theme })};
        border-radius: ${rem(4)};
      }

      // Disabled state label.
      &:disabled + label {
        cursor: not-allowed;
      }
    `;
  };

export const markerStyle = ({ isChecked }: CheckboxProps): SerializedStyles => {
  return css`
    span {
      padding: 0;
    }

    svg {
      position: absolute;
      top: 0;
      display: ${isChecked ? 'block' : 'none'};
    }
  `;
};

export const labelStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-left: ${rem(4)};
      font-size: ${theme.globals.typography.fontSizes['15']};
      font-weight: ${theme.globals.typography.weights.get('regular')};
      color: ${theme.utils.getColor('darkGrey', 750)};
      white-space: nowrap;
    `;
