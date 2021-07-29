import { css } from '@emotion/react';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import React from 'react';
import { useState, Fragment, useRef } from 'react';

import useTheme from '../../../hooks/useTheme';
import { flexCenter } from '../../../theme/functions';
import { colorShades, flatColors, neutralColors } from '../../../theme/palette';
import Button from '../../Button';
import ColorUtility from '../ColorUtility/ColorUtility';
import {
  colorBox,
  colorBoxWrapper,
  colorNameBox,
  paletteColorWrapper,
  paletteWrapper,
} from './PaletteShowcase.style';

const PaletteShowcase = () => {
  const theme = useTheme();
  const colorUtilRef = useRef<HTMLDivElement>(null);
  const [paletteColor, setPaletteColor] = useState<string | undefined>(undefined);

  type Palette = [typeof flatColors[number], string[]];
  const palette = toPairs(mapValues(theme.palette.flat, values)) as Palette[];

  const onClick = () => {
    if (window) {
      window.scrollTo(
        colorUtilRef.current?.getBoundingClientRect().x || 0,
        colorUtilRef.current?.getBoundingClientRect().y || 0
      );
    }
  };

  return (
    <Fragment>
      <div css={flexCenter}>
        <Button onClick={onClick}>Use the color utility</Button>
      </div>

      <div css={paletteWrapper}>
        {palette
          .filter(([colorName]) => !neutralColors.find(neutralColor => neutralColor === colorName))
          .map(([colorName, colors]) => (
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
                    onClick={() => {
                      setPaletteColor(color);
                    }}
                    css={colorBox(
                      color,
                      colorName,
                      ((index + 1) * 100) as typeof colorShades[number],
                      paletteColor === color
                    )}
                  >
                    <div>{(index + 1) * 100}</div>
                    <div>{color}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div ref={colorUtilRef} css={flexCenter}>
        <ColorUtility defaultColor={paletteColor} step={0.05} />
      </div>
    </Fragment>
  );
};

export default PaletteShowcase;
