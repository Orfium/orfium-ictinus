import { shade, tint } from 'polished';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { validateColor } from './utils';

const DEFAULT_COLOR = 'white';

export const useColors = (defaultColor?: string) => {
  const [colorInput, setColorInput] = useState(DEFAULT_COLOR);
  const [color, setColor] = useState(defaultColor || DEFAULT_COLOR);

  useEffect(() => {
    if (defaultColor !== DEFAULT_COLOR) {
      setColor(defaultColor || DEFAULT_COLOR);
    }
  }, [defaultColor]);

  const [lightenValue, setLightenValue] = useState(0.1);
  const [darkenValue, setDarkenValue] = useState(0.1);

  const darkColor = shade(darkenValue, color);
  const lightColor = tint(lightenValue, color);

  const updateColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const colorInput = event.target.value;
    setColorInput(colorInput);

    if (!colorInput) {
      setColor(DEFAULT_COLOR);
    }

    if (validateColor(colorInput)) {
      setColor(colorInput);
    }
  }, []);

  return {
    colorInput,
    color: {
      normal: color,
      darken: darkColor,
      lighten: lightColor,
    },
    utilityValues: {
      lighten: lightenValue,
      darken: darkenValue,
    },
    updateColor,
    setLightenValue,
    setDarkenValue,
  };
};
