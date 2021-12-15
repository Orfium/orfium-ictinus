import { toPairs } from 'lodash';
import React from 'react';

import { TextField } from '../../../index';
import { colorShadesCreator } from '../../../theme/utils';
import { colorBox, colorBoxWrapper } from '../PaletteShowcase/PaletteShowcase.style';
import ColorBox from './ColorBox';
import { colorWrapper, container, contentWrapper, inputWrapper } from './ColorUtility.style';
import { useColors } from './useColors';

const DEFAULT_COLOR = 'white';

const ColorUtility = ({ defaultColor }: { defaultColor?: string }) => {
  const { color, updateColor, setDarkenValue, setLightenValue, utilityValues } = useColors(
    defaultColor
  );

  const palette = colorShadesCreator(color.normal);
  const colors = toPairs(palette);

  return (
    <div style={{ flex: 1 }}>
      <h1> Color Utility </h1>
      <div css={container}>
        <div css={{ flexDirection: 'column', marginRight: '8px' }}>
          <div css={inputWrapper}>
            <TextField
              placeholder={color.normal || DEFAULT_COLOR}
              size={'md'}
              styleType={'outlined'}
              onChange={updateColor}
            />
          </div>
          <div css={colorWrapper(color.normal)}>
            <div css={contentWrapper}>normal : {color.normal}</div>
          </div>
          <ColorBox
            colorStatus={'lighten'}
            color={color.lighten}
            utilityValue={utilityValues.lighten}
            updateValue={setLightenValue}
          />
          <ColorBox
            colorStatus={'darken'}
            color={color.darken}
            utilityValue={utilityValues.darken}
            updateValue={setDarkenValue}
          />
        </div>
        <div css={colorBoxWrapper}>
          {colors.map(([shade, color]) => (
            // @ts-ignore
            <div
              key={`${shade}-${color}`}
              css={colorBox({ color, isSelectedColor: false, isHoverable: false })}
            >
              <div>{shade}</div>
              <div css={{ textTransform: 'capitalize' }}>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorUtility;
