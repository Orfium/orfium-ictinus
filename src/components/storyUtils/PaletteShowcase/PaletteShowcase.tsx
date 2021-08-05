import { css } from '@emotion/react';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import { rgbToColorString } from 'polished';
import React from 'react';
import { useState, Fragment, useRef } from 'react';
// @ts-ignore
import Values from 'values.js';

import useTheme from '../../../hooks/useTheme';
import { flexCenter } from '../../../theme/functions';
import { colorShades, flatColors, neutralColors } from '../../../theme/palette';
import { colorShadesCreator } from '../../../theme/utils';
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
  const [colorForTest, setColorForTest] = useState('#32324E');

  type Palette = [typeof flatColors[number], string[]];
  // @ts-ignore
  const palette = toPairs(mapValues(theme.palette.flat, values)) as Palette[];

  const onClick = () => {
    if (window) {
      window.scrollTo(
        colorUtilRef.current?.getBoundingClientRect().x || 0,
        colorUtilRef.current?.getBoundingClientRect().y || 0
      );
    }
  };

  console.log({ colorForTest });
  const _values = new Values();
  const newValues1 = _values.setColor(colorForTest)?.all() || [
    null,
    { rgb: [0, 0, 0], alpha: 0 },
    null,
  ];
  const newValues = newValues1.slice(1, -1);

  // @ts-ignore
  const tMap = newValues.map(item =>
    rgbToColorString({ red: item.rgb[0], green: item.rgb[1], blue: item.rgb[2], alpha: item.alpha })
  );
  const newTMap = /^#[0-9A-F]{6}$/i.test(colorForTest)
    ? colorShadesCreator(colorForTest, 0.1, 10)
    : [];

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
        <ColorUtility defaultColor={paletteColor} />
      </div>
      <h2>Test Case</h2>
      <input
        onChange={e => {
          setColorForTest(e.target.value);
        }}
      />
      <div css={paletteWrapper}>
        <div css={paletteColorWrapper}>
          <h2>New</h2>
          <div css={colorBoxWrapper}>
            {/*
            // @ts-ignore*/}
            {tMap.map((color, index) => (
              <div
                key={color}
                onClick={() => {
                  setPaletteColor(color);
                }}
                css={colorBox(
                  color,
                  color,
                  ((index + 1) * 100) as typeof colorShades[number],
                  paletteColor === color
                )}
              >
                <div>{(index + 1) * 50}</div>
                <div>{color}</div>
              </div>
            ))}
          </div>
        </div>
        <div css={paletteColorWrapper}>
          <h2>Old at 10%</h2>
          <div css={colorBoxWrapper}>
            {Object.values(newTMap).map((color, index) => (
              <div
                key={color}
                onClick={() => {
                  setPaletteColor(color);
                }}
                css={colorBox(
                  color,
                  // @ts-ignore*
                  color,
                  ((index + 1) * 100) as typeof colorShades[number],
                  paletteColor === color
                )}
              >
                <div>{(index + 1) * 50}</div>
                <div>{color}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaletteShowcase;
