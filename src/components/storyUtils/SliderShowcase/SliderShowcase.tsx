import React, { useState } from 'react';

import Slider from '../../Slider';

interface Props {
  isSelector?: boolean;
  disabled: boolean;
  hasIncrements?: boolean;
  onChange?: (values: number[]) => void;
}

const SliderShowcase: React.FC<Props> = props => {
  const [values, setValues] = useState(props.isSelector ? [0] : [0, 100]);

  const handleChange = (values: number[]) => {
    setValues(values);
  };

  return (
    <Slider values={values} {...props} onChange={props.onChange ? props.onChange : handleChange} />
  );
};

export default SliderShowcase;
