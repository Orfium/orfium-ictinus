import React, { FC } from 'react';

import { colorWrapper, contentWrapper } from './ColorUtility.style';
import RangeInput from './RangeInput';
import { getPercentage } from './utils';

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
export default ColorBox;
