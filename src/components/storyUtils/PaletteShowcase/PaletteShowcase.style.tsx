import { css } from '@emotion/core';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../../theme/palette';
import { transition } from '../../../theme/functions';

export const paletteWrapper = css`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const paletteColorWrapper = css`
  width: calc(100% - 20px);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const colorNameBox = (color: string, colorName: typeof flatColors[number]) => css`
  height: 100px;
  background: ${color};
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: ${pickTextColorFromSwatches(colorName, 400)}; // base shade
`;

export const colorBoxWrapper = css`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const colorBox = (
  color: string,
  colorName: typeof flatColors[number],
  shade: typeof colorShades[number],
  isSelectedColor: boolean
) => css`
  height: 50px;
  width: calc(100% - 20px);
  background: ${color};
  color: ${pickTextColorFromSwatches(colorName, shade)};
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  font-weight: ${isSelectedColor ? 700 : 400};
  ${transition(0.2)};
  transform: scale(${isSelectedColor ? 1.1 : 1});
  :hover {
    transform: scale(1.1);
  }
  div:last-child {
    font-size: 14px;
  }
`;
