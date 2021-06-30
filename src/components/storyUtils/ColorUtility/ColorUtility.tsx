import React, { FC } from 'react';
import { TextField } from '../../../index';
import { getPercentage } from './utils';
import { colorWrapper, container, contentWrapper, inputWrapper } from './ColorUtility.style';
import { useColors } from './useColors';

const DEFAULT_COLOR = 'white';

interface RangeInputProps {
  onChange: (amount: number) => void;
  value: number;
}
const RangeInput: FC<RangeInputProps> = ({ onChange, value }) => {
  return (
    <input
      onChange={event => {
        onChange(Number(event.target.value));
      }}
      readOnly={false}
      type="range"
      id="lighten-range"
      min="0"
      max="1"
      step="0.1"
      value={value}
    />
  );
};

interface ColorBoxProps {
  color: string;
  utilityValue: number;
  updateValue: React.Dispatch<React.SetStateAction<number>>;
  colorStatus: 'darken' | 'lighten';
}
const ColorBox: FC<ColorBoxProps> = ({ colorStatus, utilityValue, updateValue, color }) => {
  return (
    <div css={colorWrapper(color)}>
      <RangeInput onChange={updateValue} value={utilityValue} />
      <div css={contentWrapper}>
        {colorStatus} {getPercentage(utilityValue)} : {color}
      </div>
    </div>
  );
};

const ColorUtility = () => {
  const { color, updateColor, setDarkenValue, setLightenValue, utilityValues } = useColors();

  return (
    <div css={container}>
      <h1> Color Utility </h1>
      <div css={inputWrapper}>
        <TextField
          placeholder={DEFAULT_COLOR}
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
  );
};

export default ColorUtility;
