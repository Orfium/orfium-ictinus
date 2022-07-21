import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { BASE_SHADE } from '../../theme/palette';
import { Props } from './CheckBox';

export const wrapperStyle =
  ({ disabled }: Props) =>
  (): SerializedStyles =>
    css`
      opacity: ${disabled ? 0.3 : 1};
      justify-content: center;
      align-items: center;
      display: flex;
      gap: ${rem(2)};
    `;

export const checkboxWrapperStyle =
  ({ disabled }: Props) =>
  (): SerializedStyles => {
    const hoverStyle =
      !disabled &&
      `&:hover {
    &:before {
      display: block;
      background: rgba(0, 0, 0, 0.05);
    }
  }`;

    return css`
      border-radius: 100%;
      display: flex;
      width: ${rem(36)};
      height: ${rem(36)};
      justify-content: center;
      align-items: center;
      position: relative;

      &:before {
        display: none;
        border-radius: 100%;
        transition: all 0.2s;
        content: ' ';
        width: ${rem(36)};
        height: ${rem(36)};
        position: absolute;
      }

      ${hoverStyle}
    `;
  };

const getBackgroundColor = ({ checked, filled, theme }: Props & { theme: Theme }) => {
  if (checked) {
    return `background: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')}`;
  }

  if (filled) {
    return `background: ${theme.utils.getColor('lightGrey', 300)}`;
  }

  return `background: inherit; box-shadow: inset 0px 0px 0px ${rem('2px')} ${theme.utils.getColor(
    'lightGrey',
    300
  )};`;
};

export const checkboxStyle =
  ({ checked, filled }: Props) =>
  (theme: Theme): SerializedStyles => {
    return css`
      border: 0;
      border-radius: ${rem(2)};
      width: ${rem(20)};
      height: ${rem(20)};

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
        width: ${rem(20)};
        height: ${rem(20)};
        ${getBackgroundColor({ checked, filled, theme })};
        border-radius: ${rem(4)};
      }

      // Disabled state label.
      &:disabled + label {
        cursor: not-allowed;
      }
    `;
  };

export const markerStyle = ({ checked }: Props): SerializedStyles => {
  return css`
    span {
      padding: 0;
    }

    svg {
      position: absolute;
      top: 0;
      display: ${checked ? 'block' : 'none'};
    }
  `;
};

export const labelStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      font-size: ${theme.typography.fontSizes['15']};
      font-weight: ${theme.typography.weights.regular};
      color: ${theme.utils.getColor('darkGrey', 750)};
      white-space: nowrap;
    `;
