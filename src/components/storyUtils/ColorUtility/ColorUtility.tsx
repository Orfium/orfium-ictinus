import React from 'react';
import { TextField } from '../../../index';
import { colorWrapper, container, contentWrapper, inputWrapper } from './ColorUtility.style';
import { useColors } from './useColors';
import ColorBox from './ColorBox';

const DEFAULT_COLOR = 'white';

const ColorUtility = ({ defaultColor, step = 0.1 }: { defaultColor?: string; step?: number }) => {
  const { color, updateColor, setDarkenValue, setLightenValue, utilityValues } = useColors(
    defaultColor,
    step
  );

  return (
    <div css={container}>
      <h1> Color Utility </h1>
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
        step={step}
        colorStatus={'lighten'}
        color={color.lighten}
        utilityValue={utilityValues.lighten}
        updateValue={setLightenValue}
      />
      <ColorBox
        step={step}
        colorStatus={'darken'}
        color={color.darken}
        utilityValue={utilityValues.darken}
        updateValue={setDarkenValue}
      />
    </div>
  );
};

export default ColorUtility;
