import React, { FC } from 'react';
import { colorWrapper, contentWrapper } from './ColorUtility.style';
import RangeInput from './RangeInput';
import { getPercentage } from './utils';

interface ColorBoxProps {
  color: string;
  utilityValue: number;
  updateValue: React.Dispatch<React.SetStateAction<number>>;
  colorStatus: 'darken' | 'lighten';
  step: number;
}
const ColorBox: FC<ColorBoxProps> = ({ colorStatus, utilityValue, updateValue, color, step }) => {
  return (
    <div css={colorWrapper(color)}>
      <RangeInput onChange={updateValue} value={utilityValue} step={step} />
      <div css={contentWrapper}>
        {colorStatus} {getPercentage(utilityValue)} : {color}
      </div>
    </div>
  );
};
export default ColorBox;
