import { css } from '@emotion/core';
import { Props } from './Radio';

const focusedRadio = css`
  box-shadow: 0px 0px 0px 11px rgba(0, 0, 0, 0.04);
`;

export const inputStyles = css`
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

export const customRadioWrapperStyles = (focused: boolean, disabled: boolean) => css`
  position: relative;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  transition: box-shadow 0.3s ease;
  ${focused && !disabled && focusedRadio};
`;

export const customRadioStyles = (props: Props) => {
  function determineBoxShadow({ checked, disabled }: Props) {
    if (disabled) {
      return 'inset 0px 0px 0px 14px #efefef';
    }

    if (checked) {
      return 'inset 0px 0px 0px 2px currentColor, inset 0px 0px 0px 7px #fff, inset 0px 0px 0px 14px currentColor';
    }

    return 'inset 0px 0px 0px 14px #dfdfdf';
  }

  return css`
    transition: all 0.2s ease;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: ${determineBoxShadow(props)};
    position: absolute;
  `;
};

export const wrapperStyles = (disabled: boolean) => css`
  position: relative;

  border-radius: 50%;

  width: 50px;
  height: 50px;

  color: inherit;
  border: 0;
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

  transition: background-color 0.2s ease;

  &:hover {
    > span {
      ${!disabled && focusedRadio}
    }
  }
`;
