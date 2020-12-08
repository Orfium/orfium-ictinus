/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import useTheme from '../../../hooks/useTheme';
import { colorShades, flatColors } from '../../../theme/palette';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import toPairs from 'lodash/toPairs';
import {
  paletteColorWrapper,
  paletteWrapper,
  colorBox,
  colorBoxWrapper,
  colorNameBox,
} from './PaletteShowcase.style';

const PaletteShowcase = () => {
  const theme = useTheme();

  type Palette = [typeof flatColors[number], string[]];
  const palette = toPairs(mapValues(theme.palette.flat, values)) as Palette[];

  return (
    <div css={paletteWrapper}>
      {palette.map(([colorName, colors]) => (
        <div key={colorName} css={paletteColorWrapper}>
          <div css={colorNameBox(colors[3], colorName)}>
            <div
              css={css`
                flex: 1;
              `}
            >
              {colorName}
            </div>
            <div
              css={css`
                font-size: 14px;
              `}
            >
              Base (400)
            </div>
          </div>
          <div css={colorBoxWrapper}>
            {colors.map((color, index) => (
              <div
                key={color}
                css={colorBox(color, colorName, ((index + 1) * 100) as typeof colorShades[number])}
              >
                <div>{(index + 1) * 100}</div>
                <div>{color}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaletteShowcase;
