import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';
import { ColorScheme } from 'theme/types';
import { rem } from 'theme/utils';

import { Props } from './Radio';

const lightHoverColor = 'rgba(14, 14, 23, 0.07)';
const darkHoverColor = 'rgba(255, 255, 255, 0.1)';

const boxShadow = ({ colorScheme }: { colorScheme: ColorScheme }) => css`
  box-shadow: 0 0 0 ${rem('6px')} ${colorScheme === 'dark' ? darkHoverColor : lightHoverColor},
    inset 0 0 0 ${rem('6px')} ${colorScheme === 'dark' ? darkHoverColor : lightHoverColor};
`;

export const inputStyles: SerializedStyles = css`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  opacity: 0;

  &:disabled {
    cursor: default;
  }
`;

export const customRadioInnerHover =
  (isFocused: boolean, isDisabled: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      position: absolute;
      border-radius: 50%;
      width: ${rem('24px')};
      height: ${rem('24px')};
      transition: all 0.2s ease;
      ${isFocused && !isDisabled && boxShadow({ colorScheme: theme.colorScheme })};
    `;

export const customRadioWrapperStyles =
  (isFocused: boolean, isDisabled: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      position: relative;
      border-radius: 50%;
      width: ${rem('24px')};
      height: ${rem('24px')};
      transition: box-shadow 0.3s ease;
      ${isFocused && !isDisabled && boxShadow({ colorScheme: theme.colorScheme })};
    `;

const determineColorBasedOnState =
  ({ isChecked, isDisabled, isFilled }: Pick<Props, 'isChecked' | 'isDisabled' | 'isFilled'>) =>
  (theme: Theme) => {
    if (isChecked) {
      return `currentColor`;
    }
    if (isDisabled) {
      return `${theme.utils.getColor('lightGrey', 250)}`;
    }
    if (isFilled) {
      return `${theme.utils.getColor('lightGrey', 300)}`;
    }

    return `${theme.utils.getColor('lightGrey', 300)}`;
  };

export const customRadioStyles =
  (props: Pick<Props, 'isChecked' | 'isDisabled' | 'isFilled'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      transition: all 0.2s ease;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: absolute;
      &:before {
        content: '';
        display: inline-block;
        box-sizing: border-box;
        margin: ${rem('2px')} ${rem('12px')} ${rem('2px')} ${rem('2px')};
        border: solid 2px ${determineColorBasedOnState(props)(theme)};
        border-radius: 50%;
        width: ${rem('20px')};
        height: ${rem('20px')};
        vertical-align: top;
        transition: border-color 0.2s;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: ${rem('1px')};
        left: ${rem('1px')};
        border-radius: 50%;
        width: ${rem('12px')};
        height: ${rem('12px')};
        background-color: ${determineColorBasedOnState(props)(theme)};
        transform: translate(5px, 5px) scale(${props.isChecked ? '1' : '0'});
        transition: transform 0.2s;
      }
    `;
  };

export const wrapperStyles =
  (isDisabled: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      position: relative;

      border-radius: 50%;

      width: ${rem('36px')};
      height: ${rem('36px')};

      color: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')};
      border: 0;
      opacity: ${isDisabled ? 0.5 : 1};
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      align-items: center;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    `;
