import React, { FC } from 'react';

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

export default RangeInput;
