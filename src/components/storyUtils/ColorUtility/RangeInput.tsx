import React, { FC } from 'react';

interface RangeInputProps {
  onChange: (amount: number) => void;
  value: number;
  step: number;
}
const RangeInput: FC<RangeInputProps> = ({ onChange, value, step }) => {
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
      step={step}
      value={value}
    />
  );
};

export default RangeInput;
