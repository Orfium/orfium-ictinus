import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Props } from './Radio';
import { Theme } from '../../theme';

const hoverColor = 'rgba(0, 0, 0, 0.05)';

const focusedRadio = css`
  box-shadow: 0 0 0 ${rem('12px')} ${hoverColor};
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

export const customRadioInnerHover = (focused: boolean, disabled: boolean): SerializedStyles => css`
  position: absolute;
  border-radius: 50%;
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition: all 0.2s ease;
  ${focused && !disabled && `box-shadow: inset 0 0 0 ${rem('12px')} ${hoverColor};`};
`;

export const customRadioWrapperStyles = (
  focused: boolean,
  disabled: boolean
): SerializedStyles => css`
  position: relative;
  border-radius: 50%;
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition: box-shadow 0.3s ease;
  ${focused && !disabled && focusedRadio};
`;

const boxShadowSpread = (spread: string | number) => `inset 0px 0px 0px ${rem(spread)}`;

const determineBoxShadow = ({
  checked,
  disabled,
  filled,
}: Pick<Props, 'checked' | 'disabled' | 'filled'>) => (theme: Theme) => {
  if (disabled && !checked) {
    return `${boxShadowSpread(filled ? '12px' : '2px')} ${theme.utils.getColor('lightGray', 200)}`;
  }
  if (checked) {
    return `${boxShadowSpread('2px')} currentColor, ${boxShadowSpread(
      '4px'
    )} ${theme.utils.getColor('neutralWhite', 100)}, ${boxShadowSpread('12px')} currentColor`;
  }
  if (filled) {
    return `${boxShadowSpread('12px')} ${theme.utils.getColor('lightGray', 300)}`;
  }

  return `${boxShadowSpread('2px')} currentColor`;
};

export const customRadioStyles = (props: Pick<Props, 'checked' | 'disabled' | 'filled'>) => (
  theme: Theme
): SerializedStyles => {
  return css`
    transition: all 0.2s ease;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: ${determineBoxShadow(props)(theme)};
    position: absolute;
  `;
};

export const wrapperStyles = (disabled: boolean) => (theme: Theme): SerializedStyles => css`
  position: relative;

  border-radius: 50%;

  width: ${rem('48px')};
  height: ${rem('48px')};

  color: ${theme.utils.getColor('branded1', 400, 'normal')};
  border: 0;
  opacity: ${disabled ? 0.5 : 1};
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
