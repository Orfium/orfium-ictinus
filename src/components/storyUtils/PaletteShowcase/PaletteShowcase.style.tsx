import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../theme';
import { transition } from '../../../theme/functions';
import { colorShades, flatColors } from '../../../theme/palette';

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

export const colorNameBox = (
  theme: Theme,
  color: string,
  colorName?: typeof flatColors[number],
  shade?: typeof colorShades[number]
): SerializedStyles => css`
  height: 100px;
  background: ${color};
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: ${shade && colorName
    ? //@ts-ignore
      theme.utils.getAAColorFromSwatches(colorName, shade)
    : //@ts-ignore
      theme.utils.getAAColor(color)};
`;

export const colorBoxWrapper = css`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
`;

type ColorBoxProps = {
  theme: Theme;
  color: string;
  colorName?: typeof flatColors[number];
  shade?: typeof colorShades[number];
  isSelectedColor: boolean;
  isHoverable?: boolean;
};

export const colorBox = ({
  theme,
  color,
  colorName,
  shade,
  isSelectedColor,
  isHoverable = true,
}: ColorBoxProps): SerializedStyles => css`
  height: 50px;
  width: calc(100% - 20px);
  background: ${color};
  color: ${shade && colorName
    ? //@ts-ignore
      theme.utils.getAAColorFromSwatches(colorName, shade)
    : //@ts-ignore
      theme.utils.getAAColor(color)};
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 10px;
  font-weight: ${isSelectedColor ? 700 : 400};
  ${transition(0.2)};
  transform: scale(${isSelectedColor ? 1.1 : 1});

  ${isHoverable &&
  `
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  `}

  div:last-child {
    font-size: 14px;
    text-transform: uppercase;
  }
`;
