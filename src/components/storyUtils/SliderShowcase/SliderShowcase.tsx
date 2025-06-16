import React, { useState } from 'react';

import Slider from '../../Slider';

interface Props {
  isSelector?: boolean;
  isDisabled: boolean;
  hasIncrements?: boolean;
  onChange?: (values: number[]) => void;
  formatOptions?: Intl.NumberFormatOptions;
}

const SliderShowcase: React.FCC<Props> = (props) => {
  const [values, setValues] = useState<[number] | [number, number]>(
    props.isSelector ? [0] : [0, 100]
  );

  const handleChange = (values: number[]) => {
    setValues(values as [number] | [number, number]);
  };

  return (
    <div style={{ marginLeft: '12px', width: '181px' }}>
      <Slider
        values={values}
        {...props}
        onChange={props.onChange ? props.onChange : handleChange}
      />
    </div>
  );
};

export default SliderShowcase;
