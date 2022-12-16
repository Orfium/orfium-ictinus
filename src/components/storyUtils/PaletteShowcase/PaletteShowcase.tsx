import { css } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import uniqueId from 'lodash/uniqueId';
import values from 'lodash/values';
import React from 'react';
import { useState, Fragment, useRef } from 'react';
import { flexCenter } from 'theme/functions';
import { colorShades, flatColors, neutralColors, paleColors, BASE_SHADE } from 'theme/palette';

import ColorUtility from '../ColorUtility/ColorUtility';
import {
  colorBox,
  colorBoxWrapper,
  colorNameBox,
  paletteColorWrapper,
  paletteWrapper,
} from './PaletteShowcase.style';
import Button from 'components/Button';

const PaletteShowcase = () => {
  const theme = useTheme();
  const colorUtilRef = useRef<HTMLDivElement>(null);
  const [paletteColor, setPaletteColor] = useState<string | undefined>(undefined);

  type Palette = [typeof flatColors[number], string[]];
  type PalePalette = [typeof paleColors[number], string[]];
  // @ts-ignore
  const palette = toPairs(mapValues(theme.globals.colors.flat, values)) as Palette[];
  // @ts-ignore
  const palePalette = toPairs(theme.globals.colors.pale) as PalePalette;

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
          // .filter(([colorName]) => !neutralColors.find(neutralColor => neutralColor === colorName))
          .map(([colorName, colors]) => (
            <div key={colorName} css={paletteColorWrapper}>
              <div
                css={colorNameBox(
                  // @ts-ignore
                  theme,
                  colors[Math.floor(colors.length / 2)],
                  colorName,
                  BASE_SHADE
                )}
              >
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
                  <div>
                    {neutralColors.find((neutralColor) => neutralColor === colorName) &&
                      'system color'}
                  </div>
                  Base ({BASE_SHADE})
                </div>
              </div>
              <div css={colorBoxWrapper}>
                {colors.map((color, index) => (
                  <div
                    key={uniqueId(`${color}-${colorName}`)}
                    onClick={() => {
                      setPaletteColor(color);
                    }}
                    css={colorBox({
                      // @ts-ignore
                      theme,
                      color,
                      colorName,
                      shade: ((index + 1) * 50) as typeof colorShades[number],
                      isSelectedColor: paletteColor === color,
                    })}
                  >
                    <div>{(index + 1) * 50}</div>
                    <div css={{ textTransform: 'capitalize' }}>{color}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div>
        <h3>PALE PALETTE</h3>
        <p>Another palette is the pale where is not having shades.</p>
        <div css={paletteColorWrapper}>
          <div
            css={colorNameBox(
              // @ts-ignore
              theme,
              'white'
            )}
          >
            <div
              css={css`
                flex: 1;
              `}
            >
              Pale
            </div>
            <div
              css={css`
                font-size: 14px;
              `}
            />
          </div>
          <div css={colorBoxWrapper}>
            {/*
        // @ts-ignore */}
            {palePalette.map(([colorName, color]) => (
              <div
                key={uniqueId(`${color}-${colorName}`)}
                css={colorBox({
                  //@ts-ignore
                  theme,
                  color,
                  colorName,
                  isSelectedColor: false,
                  isHoverable: false,
                })}
              >
                <div>{colorName}</div>
                <div css={{ textTransform: 'capitalize' }}>{color}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={colorUtilRef} css={flexCenter}>
        <ColorUtility defaultColor={paletteColor} />
      </div>
    </Fragment>
  );
};

export default PaletteShowcase;
